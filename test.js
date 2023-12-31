'''Build a tic tac toe game (2 players) using javascript, html, css.'''

def tictactoe(): 
    print("Welcome to Tic Tac Toe!")
    print("Player 1 will be X and Player 2 will be O") 
    print("The board is numbered like the keyboard's number pad")
    print("The first player to get 3 in a row wins!")
    print("Let's begin!")
    print("Here is the board:")
    print("7|8|9")
    print("-----")
    print("4|5|6")
    print("-----")
    print("1|2|3")
    print("Player 1 goes first")
    print("Player 1, please enter a number from 1-9")
    board = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    player = 1
    while True:
        if player == 1:
            print("Player 1, please enter a number from 1-9")
            move = int(input())
            if board[move] == " ":
                board[move] = "X"
                player = 2
            else:
                print("That spot is already taken, please try again")
        else:
            print("Player 2, please enter a number from 1-9")
            move = int(input())
            if board[move] == " ":
                board[move] = "O"
                player = 1
            else:
                print("That spot is already taken, please try again")
        print(board[7] + "|" + board[8] + "|" + board[9])
        print("-----")
        print(board[4] + "|" + board[5] + "|" + board[6])
        print("-----")
        print(board[1] + "|" + board[2] + "|" + board[3])
        if board[1] == board[2] == board[3] != " ":
            print("Game over! Player " + board[1] + " wins!")
            break
        elif board[4] == board[5] == board[6] != " ":
            print("Game over! Player " + board[4] + " wins!")
            break
        elif board[7] == board[8] == board[9] != " ":
            print("Game over! Player " + board[7] + " wins!")
            break
        elif board[1] == board[4] == board[7] != " ":
            print("Game over! Player " + board[1] + " wins!")
            break
        elif board[2] == board[5] == board[8] != " ":
            print("Game over! Player " + board[2] + " wins!")
            break
        elif board[3] == board[6] == board[9] != " ":
            print("Game over! Player " + board[3] + " wins!")
            break
        elif board[1] == board[5] == board[9] != " ":
            print("Game over! Player " + board[1] + " wins!")
            break
        elif board[3] == board[5] == board[7] != " ":
            print("Game over! Player " + board[3] + " wins!")
            break
        elif board[1] != " " and board[2] != " " and board[3] != " " and board[4] != " " and board[5] != " " and board[6] != " " and board[7] != " " and board[8] != " " and board[9] != " ":
            print("Game over! It's a tie!")
            break
tictactoe()
