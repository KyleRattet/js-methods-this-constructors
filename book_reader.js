function BookReader(book) {
  this.book = book;
  this.currentPage = 0;
}

//in progress
BookReader.prototype.nextPage = function(book) {
  if (this.currentPage < this.book.length-1) {
    this.currentPage ++;
  }
  return this.book[this.currentPage];
};

BookReader.prototype.previousPage = function(book) {
  if (this.currentPage > 0) {
    this.currentPage = this.currentPage - 1;
  }
  return this.book[this.currentPage];
};

BookReader.prototype.pagesLeft = function() {
  var numberOfPagesLeft = (this.book.length -1) - this.currentPage;
  return numberOfPagesLeft;
};

BookReader.prototype.encouragement = function() {
  var numberOfPagesLeft = parseInt((this.book.length -1) - this.currentPage);
  if(this.book.currentPage -1 = this.currentPage) {
    return "Keep going, only " + numberOfPagesLeft+ " pages left after this one!";
  }
    return "Keep going, this book is good 'til the last drop!";
};

// DO NOT MODIFY BELOW THIS COMMENT
module.exports = BookReader;
