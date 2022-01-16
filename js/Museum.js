class Museum{
    constructor(){
      this.pieces = [];
    }
    getPieces(){
      return this.pieces
    }
    setPieces( pieces ){
      this.pieces = pieces;
    }
    RibbonSeparatorMuseum(){
      let piece1 = new Piece("../img/gif.gif", "Pintado en 1937, este Retrato de Dora Maar o Henriette Theodora Markovitch, representa a la musa de Picasso. Esta artista plástica, aparte de ser conocida por su relación con el artista malagueño, fue muy prolífica. Sin duda con una personalidad muy compleja, callada, orgullosa, inteligente y curiosa, Dora Maar nos dejó una conocida serie de fotografías del Guernica. El Retrato de Dora Maar se encuentra en el Museo Nacional Centro de Arte Reina Sofía en Madrid (España).");
      this.pieces.push( piece1 );
    }
  }