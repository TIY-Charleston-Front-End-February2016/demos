Social Sharing Surf condition Crowdsourcing app

technologies
 - java/spring
 - angular
 - web and mobile, but more mobile
 - web is more bloggy (consumption or info rather than adding new.)


 - current conditions
     - wave report
     	- wave size (face)
     	- set interval
     	- wind
     	- water temp
     	- tide
     	- air temp
       	- groundswell, windswell (type of wave)

       	// technical

       	weather api's
       	magic seaweed api
       	google maps


	- nature report
		- crowded lineup
		- phenology / wildlife
		- mullet season, blue (lotsa anglers on piers)

		// technical
		crud on this - self reported by users



 - surf spots  
   - listing of local surf spots (eg. washout, 7th st., station 42 iop)
   		- parking locations/costs
   		- hard to access (how close to public beach access)
	   	- common spots avail to all users
   		- user can share secret spots with friends

   		// technical
   		implement google maps


  USER STORY - show listing and details of surf spots in 50mi radius of current location

  L

  value statement
  As a <USER>, I need <SOMETHING>, so that <VALUE>.
  As a surfer, I want to view local surf spots, so that i can go surfing.

  assumptions
  - there is data for said spots
  - user is already logged in
  - user has no friends yet

  acceptance criteria
  - surfer sees list of public surf spots in a <variable> radius of current location
  - each spot in listing should have a detailed view
  - each spot should present following data on listing view:
     - name of spot
     - address
     - popularity rating (based off of checkins)
  - each spot should present following data on detail view:
     - name of spot
     - address with map view
     - popularity
     - parking access (costs)
     - distance to surf
     - notes on spot
     - type of wave that is usually at this spot

  notes/wireframes

    - depends on google maps api



  - USER STORY - User access to secret spots of friends

     As a surfer, I want to go to less crowded spots with my friends, so that I can catch
     more quality waves without the hassle of waiting my turn.

     L

     - Assumptions
     	- google maps api
    	 - user is logged in
     	- user has at least 1 friend
     	- friends have secret spots
     	- data attributes of public spots are the same

     - Acceptance Criteria
        - When viewing list of spots, we can see our friend's secret spots as well, noted
        as friends secret spot
        - secret spots noted in section on friend profile
        - secret spot listed mixed with public spots, but denoted with a secret banner (see wireframe)
        - user can only access secret spots if they are friends with said user having secret spots

     - Notes
       - wireframe articulating secret spot amongst public listing
       - wireframe articulating secret spot on friend's profile




















 - custom alerts based on conditions
 	- size thresholds, wind threshold
    - friend nearby

 - condition calendar
   - forecast week, swell predictions


 - shark positioning
 	- integrate with shark location database



 - geolocation
   - user location
   - access to friends location?

 - log your surf sites
 	- crud surf spots

 - geofencing (related to alerts custom)
    - radius around spots

 - friends list
   - add, remove, show friends

 - signup

 - login / logout

 - design / usable and looks good

 - surfing challenges (badging)
 	- most global surfer
 	- most local spots

 - statistics on surf session
	- historical stats,
		- all time wave count/session

- asset management (photos/videos)
	- upload vid or photo


 
