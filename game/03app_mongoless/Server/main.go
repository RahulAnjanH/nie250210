package main

import (
	//"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Game struct {
	Id              string
	GameName        string
	Numberofplayers int
	Price           float64
}

func readAllGames(c *gin.Context) {
	flights := []Game{{Id: "1", GameName: "Chess", Numberofplayers: 2, Price: 100}, {Id: "2", GameName: "carrom", Numberofplayers: 4, Price: 150}}

	c.JSON(http.StatusOK, flights)
}
func readGame(c *gin.Context) {
	id := c.Param("id")
	games := Game{Id: id, GameName: "Chess", Numberofplayers: 2, Price: 100}
	c.JSON(http.StatusOK, games)
}
func createGame(c *gin.Context) {
	var jbody Game
	err := c.BindJSON(&jbody)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server error" + err.Error()})
		return
	}
	createdGame := Game{Id: "1", GameName: "Chess", Numberofplayers: 2, Price: 100}
	c.JSON(http.StatusCreated, gin.H{"message": "Game created successfully", "Game": createdGame})

}
func updateGame(c *gin.Context) {
	id := c.Param("id")
	var jbodyFlight Game
	err := c.BindJSON(&jbodyFlight)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server error" + err.Error()})
		return
	}
	updatedGame := Game{Id: id, GameName: "Chess", Numberofplayers: 2, Price: 100}
	c.JSON(http.StatusOK, gin.H{"message": "Game Updated Successfully", "Game": updatedGame})
}
func deleteGame(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{"message": "Game Deleted Successfully with id  " + id})
}
func main() {
	// routes | API Endpoints
	r := gin.Default()
	r.GET("/games", readAllGames)
	r.GET("/games/:id", readGame)
	r.POST("/games", createGame)
	r.PUT("/games/:id", updateGame)
	r.DELETE("/games/:id", deleteGame)
	//server (default 8080 // r.Run(":8080"))
	r.Run()
}
