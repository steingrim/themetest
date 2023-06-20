* {  
    margin: 0;  
    padding: 0;  
    box-sizing: border-box;  
   }  
   html {  
    font-size: 10px;  
   }  
   body {  
    background-color: #000000;  
    font-family: 'Overpass Mono', monospace;  
    font-size: 2rem;  
    height: 100vh;  
    display: flex;  
    align-items: center;  
    justify-content: center;  
   }  
   #container {  
    display: grid;  
    gap: 2rem;  
    grid-template-rows: minmax(6rem, 1fr) minmax(10rem, 1fr) 3fr minmax(5rem, 1fr);  
    grid-template-columns: 1fr 1fr;  
    grid-template-areas:  
     'title title'  
     'board board'  
     'img alph'  
     'bot bot';  
    width: 90vw;  
    max-width: 900px;  
    height: 90vh;  
    margin: auto;  
   }  
   #title {  
    grid-area: title;  
    color: rgb(50, 177, 149);  
    font-size: 6rem;  
    text-align: center;  
    letter-spacing: 0.8rem;  
   }  
   #board {  
    font-size: 2.5rem;  
    grid-area: board;  
    letter-spacing: 0.4rem;  
    display: flex;  
    align-items: center;  
    justify-content: center;  
    background-color: lightblue;  
    text-transform: uppercase;  
    text-align: center;  
    padding: 2rem;  
    border-radius: 1rem;  
   }  
   #hangin-dude {  
    display: flex;  
    align-items: center;  
    justify-content: center;  
    grid-area: img;  
    background-color: lightcoral;  
    padding: 1rem;  
    border-radius: 1rem;  
    min-height: 350px;  
   }  
   #hangin-dude img {  
    width: 90%;  
   }  
   #alphabet {  
    grid-area: alph;  
    display: flex;  
    flex-wrap: wrap;  
    justify-content: center;  
    align-content: center;  
    background-color: lightgoldenrodyellow;  
    padding: 5rem;  
    text-transform: uppercase;  
    text-align: center;  
    border-radius: 1rem;  
   }  
   h1 {  
    width: 100%;  
   }  
   #timer {  
    grid-area: bot;  
    font-size: 2.5rem;  
    background-color: lightseagreen;  
    text-align: center;  
    display: flex;  
    align-items: center;  
    justify-content: center;  
    padding: 3rem;  
    border-radius: 1rem;  
   }  
   .letter {  
    display: flex;  
    align-items: center;  
    justify-content: center;  
    border: 1px solid rgba(0, 0, 0, 0.733);  
    border-radius: 0.8rem;  
    width: 4rem;  
    height: 4rem;  
    margin: 0.5rem;  
    cursor: pointer;  
   }  
   .letter:hover {  
    border: 2px solid rgb(7, 145, 155);  
    color: rgb(7, 145, 155);  
    box-shadow: 0px 0px 12px 0px rgba(180, 192, 197, 0.389);  
   }  
   .btn {  
    margin-top: 3rem;  
    border: 2px solid black;  
    border-radius: 0.5rem;  
    padding: 1rem 2rem;  
    cursor: pointer;  
   }  
   .btn:hover {  
    box-shadow: 0px 0px 12px 0px rgba(180, 192, 197, 0.4);  
    background-color: rgb(255, 255, 229);  
   }  
   .play {  
    color: green;  
   }  
   .play:hover {  
    cursor: pointer;  
    font-size: 40px;  
    transition: all 0.2s ease-in-out;  
   }  
   @media screen and (max-width: 910px) {  
    #alphabet {  
     padding: 2rem;  
    }  
    .letter {  
     font-size: 2rem;  
     width: 3rem;  
     height: 3rem;  
    }  
   }  
   @media screen and (max-width: 610px) {  
    #container {  
     grid-template-rows:  
      minmax(10rem, 1fr) minmax(10rem, 1fr) minmax(100px, 3fr) minmax(  
       100px,  
       3fr  
      )  
      minmax(6rem, 1fr);  
     grid-template-columns: 1fr;  
     grid-template-areas:  
      'title'  
      'board'  
      'img'  
      'alph'  
      'bot';  
    }  
    #hangin-dude img {  
     width: auto;  
     height: 100%;  
    }  
    #alphabet {  
     padding: 1.5rem;  
    }  
    .letter {  
     padding: 0.5rem;  
     margin: 0.5rem;  
    }  
    #board {  
     font-size: 2rem;  
     display: flex;  
     /* flex-wrap: wrap; */  
     align-items: center;  
     justify-content: center;  
    }  
    h1 {  
     margin-top: 2rem;  
    }  
    .btn {  
     margin-top: 0.5rem;  
    }  
   }  
   @media screen and (max-width: 430px) {  
    .letter {  
     font-size: 1.5rem;  
     height: 2.5rem;  
     width: 2.5rem;  
    }  
   }  