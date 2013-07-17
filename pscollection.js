function PSCollection(cols, cellWidth){
    this.view = $("<div />");
    this.cols = cols;
    this.cellWidth = cellWidth;
    this.view.width(cellWidth * cols);
    this.empty = $("<div>还木有内容捏~~~</div>");
    this.view.append(this.empty);
    this.panels = [];
    for(var i=0; i<cols; i++){
	var panel = $("<div />");
	panel.width(cellWidth);
	panel.css("float","left");
	this.panels.push(panel);
	this.view.append(panel);
    }
    this.view.append($("<div />").css("clear","both").width(cellWidth * cols));
}

PSCollection.prototype.show = function(parent){
    parent.append(this.view);
}
PSCollection.prototype.appendCell = function(cell){
    this.empty.remove();
    var panel = this.panels[0]
    for(var i=1;i<this.cols;i++){
	if(panel.height() > this.panels[i].height())
	    panel = this.panels[i];
    }
    panel.append(cell.width(this.cellWidth));
}