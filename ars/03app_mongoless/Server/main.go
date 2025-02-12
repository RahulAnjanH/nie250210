package main

import (
	//"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Flight struct {
	Id          string
	Number      string
	AirlineName string
	Source      string
	Destination string
	Capacity    int
	Price       float64
}

func readAllFlights(c *gin.Context) {
	flights := []Flight{{Id: "1", Number: "AI845", AirlineName: "AirIndia", Source: "Mumbai", Destination: "AbuDabi", Capacity: 180, Price: 15000},
		{Id: "1", Number: "AI765", AirlineName: "AirIndia", Source: "AbuDabi", Destination: "Mumbai", Capacity: 180, Price: 15000}}
	c.JSON(http.StatusOK, flights)
}
func readFlightById(c *gin.Context) {
	id := c.Param("id")
	Flight := Flight{Id: id, Number: "AI845", AirlineName: "AirIndia", Source: "Mumbai", Destination: "Abudabai", Capacity: 180, Price: 15000.0}
	c.JSON(http.StatusOK, Flight)
}
func createFlight(c *gin.Context) {
	var jbodyFlight Flight
	err := c.BindJSON(&jbodyFlight)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server error" + err.Error()})
		return
	}
	createdFlight := Flight{Id: "1", Number: "AI845", AirlineName: "AirIndia", Source: "Mumbai", Destination: "Abudabai", Capacity: 180, Price: 15000.0}
	c.JSON(http.StatusCreated, gin.H{"message": "Flight created successfully", "flight": createdFlight})
}
func updateFlight(c *gin.Context) {
	id := c.Param("id")
	var jbodyFlight Flight
	err := c.BindJSON(&jbodyFlight)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server error" + err.Error()})
		return
	}
	updatedFlight := Flight{Id: id, Number: "AI845", AirlineName: "AirIndia", Source: "Mumbai", Destination: "Abudabai", Capacity: 180, Price: 15000.0}
	c.JSON(http.StatusOK, gin.H{"message": "Flight Updated Successfully", "flight": updatedFlight})
}
func deleteFlight(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{"message": "Flight Deleted Successfully with id  " + id})

}
func main() {
	// routes | API Endpoints
	r := gin.Default()
	r.GET("/flights", readAllFlights)
	r.GET("/flights/:id", readFlightById)
	r.POST("/flights", createFlight)
	r.PUT("/flights/:id", updateFlight)
	r.DELETE("/flights/:id",deleteFlight)
	//server (default 8080 // r.Run(":8080"))
	r.Run()
}
