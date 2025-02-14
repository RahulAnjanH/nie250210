package main

import (
	"context" //**
	"fmt"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"           //**
	"go.mongodb.org/mongo-driver/bson/primitive" //**
	"go.mongodb.org/mongo-driver/mongo"          //**
	"go.mongodb.org/mongo-driver/mongo/options"  //**
)

// Config
var mongoUri string = "mongodb://localhost:27017"
var mongoDbName string = "game_app_db"

// Database variables
var mongoClient *mongo.Client
var GameCollection *mongo.Collection

type Game struct {
	Id              primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	GameName        string             `json:"game_name" bson:"game_name"`
	NumberOfPlayers string             `json:"number_of_players" bson:"number_of_players"`
	Description     string             `json:"description" bson:"description"`
	Price           float64            `json:"price" bson:"price"`
}

// mongo connect
func connectToMongo() {
	var err error
	mongoClient, err = mongo.Connect(context.TODO(), options.Client().ApplyURI(mongoUri))
	if err != nil {
		fmt.Println("Mongo DB Connection Error!" + err.Error())
		return
	}
	name := "games"
	GameCollection = mongoClient.Database(mongoDbName).Collection(name)
}

// apis
func createGame(c *gin.Context) {
	var game Game
	if err := c.BindJSON(&game); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server Error." + err.Error()})
		return
	}
	//
	game.Id = primitive.NewObjectID()
	_, err := GameCollection.InsertOne(context.TODO(), game)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server Error.\n" + err.Error()})
		return
	}
	//
	c.JSON(http.StatusCreated,
		gin.H{"message": "Game Created Successfully", "Game": game})
}

func readAllGames(c *gin.Context) {
	//
	var games []Game
	cursor, err := GameCollection.Find(context.TODO(), bson.M{})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server Error.\n" + err.Error()})
		return
	}
	defer cursor.Close(context.TODO())
	//
	games = []Game{}
	err = cursor.All(context.TODO(), &games)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server Error.\n" + err.Error()})
		return
	}
	//
	c.JSON(http.StatusOK, games)
}

func readGameById(c *gin.Context) {
	id := c.Param("id")
	//
	gameId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID.\n" + err.Error()})
		return
	}
	//
	var game Game
	err = GameCollection.FindOne(context.TODO(), bson.M{"_id": gameId}).Decode(&game)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Game Not Found."})
		return
	}
	//
	c.JSON(http.StatusOK, game)
}

func updateGame(c *gin.Context) {
	id := c.Param("id")
	gameId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID.\n" + err.Error()})
		return
	}
	//
	var oldGame Game
	err = GameCollection.FindOne(context.TODO(), bson.M{"_id": gameId}).Decode(&oldGame)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Game Not Found."})
		return
	}
	//
	var jbodygame Game
	err = c.BindJSON(&jbodygame)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server Error." + err.Error()})
		return
	}
	oldGame.Price = jbodygame.Price
	//
	_, err = GameCollection.UpdateOne(context.TODO(),
		bson.M{"_id": gameId},
		bson.M{"$set": bson.M{"price": jbodygame.Price}})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server Error." + err.Error()})
		return
	}
	//response
	c.JSON(http.StatusOK, gin.H{"message": "Game Updated Successfully", "flight": oldGame})
}

func deleteGame(c *gin.Context) {
	id := c.Param("id")
	gameId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID.\n" + err.Error()})
		return
	}
	//
	var oldGame Game
	err = GameCollection.FindOne(context.TODO(), bson.M{"_id": gameId}).Decode(&oldGame)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Game Not Found."})
		return
	}
	//delete
	_, err = GameCollection.DeleteOne(context.TODO(), bson.M{"_id": gameId})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server Error." + err.Error()})
		return
	}
	//response
	c.JSON(http.StatusOK, gin.H{"message": " Game deleted successfully."})
}

func main() {
	//
	connectToMongo()
	//router
	r := gin.Default()
	//cors
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // React frontend URL
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))
	//routes
	r.POST("/games", createGame)
	r.GET("/games", readAllGames)
	r.GET("/games/:id", readGameById)
	r.PUT("/games/:id", updateGame)
	r.DELETE("/games/:id", deleteGame)
	//server
	r.Run(":8080")
}
