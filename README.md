# connectFour
Project 1

Trello link: https://trello.com/b/e9EBnz27/connect-4 
Link to Game:http://michaelsunday.github.io/connectFour/?

### Technology

The game I created is connect four. What I use to make this game was HTML, CSS, Javascript and Jquery. Going into depth, somethings I added into my game were web audio API, and some jquery API (hide, show). 

### How I Made My Game

I first started in my HTML and created 42 div tags and put classes and id on it. In my CSS, I styled my div's with some transparency to make it see through and shaped it as circle. I floated my boxes to left so it would create a column of 7. In Javascript I first wanted to make a click counter so I would be able to set the difference from player 1 and 2. Once I put a color for player 1 and 2, I made a function that would be able to drop the game piece into the column of choice. When player drops game piece into desired column it would fill into the last opening circle that does not have a game piece. I did this by making a function that would check each one of the children of the column if it is open or not. Now I had to check if a player won. The win logic I did was use functions and loops to check each way a player can win. Meaning this I made a function and loop that checked horizontally, vertically, and diagonally. It would print out true if one of the players has won. I did not want to make my game boring with a regular alert screen, so I made a seperate div and styled a win box. I personally made it hidden at the beginning of the game so when some has won it would pop up. I styled it with a gif with John Cena (The newest viral thing on the internet) and his theme song playing really loud when a player has won.

### Installation

Once I finished my game, I went on my terminal and made sure everything was pushed onto my master branch. I then made a new branch where I pushed all my commits from my master branch. This then made my game live and able to share it with anyone on the internet. 

### Unsolved

One thing that I have been trying to fix in my game was stop making the top row bugging. The bug was that if it has reached the top, you can click it again and it would turn the opposite color of yours and can still win. Secondly their was more stuff I wanted to add to my game like making more animations. Especially making the winner font alternate color when won.