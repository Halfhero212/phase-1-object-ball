// 00-objectball.js

function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
          "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
          "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
          "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
          "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
          "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
          "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
          "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 },
        },
      },
    };
  }
  
  function numPointsScored(playerName) {
    const game = gameObject();
    for (const teamType in game) {
      const team = game[teamType];
      const players = team.players;
      if (players[playerName]) {
        return players[playerName].points;
      }
    }
  }
  
  function shoeSize(playerName) {
    const game = gameObject();
    for (const teamType in game) {
      const team = game[teamType];
      const players = team.players;
      if (players[playerName]) {
        return players[playerName].shoe;
      }
    }
  }
  
  function teamColors(teamName) {
    const game = gameObject();
    for (const teamType in game) {
      const team = game[teamType];
      if (team.teamName === teamName) {
        return team.colors;
      }
    }
  }
  
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  function playerNumbers(teamName) {
    const game = gameObject();
    const playersNumbers = [];
    for (const teamType in game) {
      const team = game[teamType];
      if (team.teamName === teamName) {
        for (const playerName in team.players) {
          playersNumbers.push(team.players[playerName].number);
        }
      }
    }
    return playersNumbers;
  }
  
  function playerStats(playerName) {
    const game = gameObject();
    for (const teamType in game) {
      const team = game[teamType];
      const players = team.players;
      if (players[playerName]) {
        return players[playerName];
      }
    }
  }
  
  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
    for (const teamType in game) {
      const team = game[teamType];
      for (const playerName in team.players) {
        const player = team.players[playerName];
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          rebounds = player.rebounds;
        }
      }
    }
    return rebounds;
  }
  
  // Continuation from previous `00-objectball.js` code snippet

function mostPointsScored() {
    const game = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints = '';
    for (const teamType in game) {
      const teamPlayers = game[teamType].players;
      for (const player in teamPlayers) {
        if (teamPlayers[player].points > mostPoints) {
          mostPoints = teamPlayers[player].points;
          playerWithMostPoints = player;
        }
      }
    }
    return playerWithMostPoints;
  }
  
  function winningTeam() {
    const game = gameObject();
    let scores = { home: 0, away: 0 };
  
    for (const teamType in game) {
      const teamPlayers = game[teamType].players;
      for (const player in teamPlayers) {
        scores[teamType] += teamPlayers[player].points;
      }
    }
  
    return scores.home > scores.away ? game.home.teamName : game.away.teamName;
  }
  
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = '';
  
    for (const teamType in game) {
      const teamPlayers = game[teamType].players;
      for (const player in teamPlayers) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
  
    return longestName;
  }
  
  function doesLongNameStealATon() {
    const game = gameObject();
    let mostSteals = 0;
    let playerWithMostSteals = '';
    const longestNamePlayer = playerWithLongestName();
  
    for (const teamType in game) {
      const teamPlayers = game[teamType].players;
      for (const player in teamPlayers) {
        if (teamPlayers[player].steals > mostSteals) {
          mostSteals = teamPlayers[player].steals;
          playerWithMostSteals = player;
        }
      }
    }
  
    return longestNamePlayer === playerWithMostSteals;
  }
  
  // Examples of how you could test these functions directly in the browser's console
  console.log(gameObject());
  console.log(numPointsScored('Alan Anderson'));
  console.log(shoeSize('Alan Anderson'));
  console.log(teamColors('Brooklyn Nets'));
  console.log(teamNames());
  console.log(playerNumbers('Brooklyn Nets'));
  console.log(playerStats('Alan Anderson'));
  console.log(bigShoeRebounds());
  console.log(mostPointsScored());
console.log(winningTeam());
console.log(playerWithLongestName());
console.log(doesLongNameStealATon());
