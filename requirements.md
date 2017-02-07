Option 1)
Using React and Firebase, implement a Github "user saver" app. The app should meet the following criteria:

1) There is a search bar at the top of the page in which users can enter Github usernames
2) Upon pressing enter in the textbox, the application retrieves this URL https://api.github.com/users/<username>
3) If there is a result, the application displays a success message to the user and saves data. If there is an error, the application displays an error message.
4) Below the search box there are rows of data corresponding to users in the database. Each row contains this information:
- Username w/ link to Github profile
- name
- public_repos
- public_gists
- followers
- following
- created_at in MM/DD/YYYY format

Visuals here: http://i.imgur.com/QUVddT3.png

The app does not need to worry about authentication or user-specific lists of any kind.
