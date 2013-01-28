$(document).ready(function(){
    var path={
    grid:[
    //1st Row
    {'x':0,'y':0},
    {'x':100,'y':0},
    {'x':200,'y':0},
    {'x':300,'y':0},
    {'x':400,'y':0},
    {'x':500,'y':0},
    {'x':600,'y':0},
    {'x':700,'y':0},
    {'x':800,'y':0},
    {'x':900,'y':0},
    //2nd Row
    {'x':900,'y':140},
    {'x':800,'y':140},
    {'x':700,'y':140},
    {'x':600,'y':140},
    {'x':500,'y':140},
    {'x':400,'y':140},
    {'x':300,'y':140},
    {'x':200,'y':140},
    {'x':100,'y':140},
    {'x':0,'y':140},
    //3rd Row
    {'x':0,'y':280},
    {'x':100,'y':280},
    {'x':200,'y':280},
    {'x':300,'y':280},
    {'x':400,'y':280},
    {'x':500,'y':280},
    {'x':600,'y':280},
    {'x':700,'y':280},
    {'x':800,'y':280},
    {'x':900,'y':280},
    //4th Row
    {'x':900,'y':420},
    {'x':800,'y':420},
    {'x':700,'y':420},
    {'x':600,'y':420},
    {'x':500,'y':420},
    {'x':400,'y':420},
    {'x':300,'y':420},
    {'x':200,'y':420},
    {'x':100,'y':420},
    {'x':0,'y':420},
    //5th Row
    {'x':0,'y':560},
    {'x':100,'y':560},
    {'x':200,'y':560},
    {'x':300,'y':560},
    {'x':400,'y':560},
    {'x':500,'y':560},
    {'x':600,'y':560},
    {'x':700,'y':560},
    {'x':800,'y':560},
    {'x':900,'y':560}]
};
/*
{
'cars': [{
        'block':5,
        'exist':true,
        'color':'yellow'
    },
    {
        'block':5,
        'exist':true,
        'color':'green'
    },
    {
        'block':5,
        'exist':true,
        'color':'orange'
    },
    {
        'block':5,
        'exist':true,
        'color':'white'
    },
    {
        'block':5,
        'exist':true,
        'color':'grey'
    },
    {
        'block':5,
        'exist':true,
        'color':'pink'
    }]

}
*/

    
var Paper = new Raphael('canvas',1000,760);

var elementArray=[];
CarLocation=function(options){
    for (var i = elementArray.length - 1; i >= 0; i--) {
        elementArray[i].remove();
    };
    for (var i = 0;i<options.cars.length;i++) {
        if(options.cars[i].exist)
        {
            block=options.cars[i].block-1;//Since We are referring to an array and count starts from 0
            var cx=path.grid[block].x+Math.round(Math.random()*80);
            var cy=10+path.grid[block].y+Math.round(Math.random()*80);
            elementArray.push(paper.path(M28.59,10.781h-2.242c-0.129,0-0.244,0.053-0.333,0.133c-0.716-1.143-1.457-2.058-2.032-2.633c-2-2-14-2-16,0C7.41,8.854,6.674,9.763,5.961,10.898c-0.086-0.069-0.19-0.117-0.309-0.117H3.41c-0.275,0-0.5,0.225-0.5,0.5v1.008c0,0.275,0.221,0.542,0.491,0.594l1.359,0.259c-1.174,2.619-1.866,5.877-0.778,9.14v1.938c0,0.553,0.14,1,0.313,1h2.562c0.173,0,0.313-0.447,0.313-1v-1.584c2.298,0.219,5.551,0.459,8.812,0.459c3.232,0,6.521-0.235,8.814-0.453v1.578c0,0.553,0.141,1,0.312,1h2.562c0.172,0,0.312-0.447,0.312-1l-0.002-1.938c1.087-3.261,0.397-6.516-0.775-9.134l1.392-0.265c0.271-0.052,0.491-0.318,0.491-0.594v-1.008C29.09,11.006,28.865,10.781,28.59,10.781zM7.107,18.906c-1.001,0-1.812-0.812-1.812-1.812s0.812-1.812,1.812-1.812s1.812,0.812,1.812,1.812S8.108,18.906,7.107,18.906zM5.583,13.716c0.96-2.197,2.296-3.917,3.106-4.728c0.585-0.585,3.34-1.207,7.293-1.207c3.953,0,6.708,0.622,7.293,1.207c0.811,0.811,2.146,2.53,3.106,4.728c-2.133,0.236-6.286-0.31-10.399-0.31S7.716,13.952,5.583,13.716zM24.857,18.906c-1.001,0-1.812-0.812-1.812-1.812s0.812-1.812,1.812-1.812s1.812,0.812,1.812,1.812S25.858,18.906,24.857,18.906z).attr({fill: "#000", stroke: "none"}););


        }
    };

}

//RoadPatch Class that handles most of the functions as well as the Object specific code
var RoadPatch=function(){};
RoadPatch.prototype.settings={
                            'sidewalkWidth': 10,
                            'sidewalkLength': 100,
                            'sidewalkColor': 'brown',
                            'RoadPatchWidth': 100,
                            'RoadPatchLength': 100,
                            'RoadPatchColor': 'black',
                            'roadStripLength': 40,
                            'roadStripWidth': 10,
                            'roadStripColor': '#FFFFFF'
                            };
RoadPatch.prototype.getSettings=function(){return this.settings;};



var upperStrip=function(RoadPatch,Paper,grid){
    //Upper Strip Sidewalk
    Paper.rect(grid.x,grid.y,RoadPatch.getSettings().sidewalkLength,RoadPatch.getSettings().sidewalkWidth).attr({
        'fill':RoadPatch.getSettings().sidewalkColor
    });
}

var lowerStrip=function(RoadPatch,Paper,grid){
    //Lower Strip Sidewalk
    Paper.rect(grid.x,grid.y+RoadPatch.getSettings().RoadPatchWidth,RoadPatch.getSettings().sidewalkLength,RoadPatch.getSettings().sidewalkWidth).attr({
        'fill':RoadPatch.getSettings().sidewalkColor
    });
};

//Generates the Strips on the Road
var stripBuilder=function(RoadPatch,Paper,grid){
                    return Paper.rect(20+grid.x, 40+grid.y+RoadPatch.getSettings().sidewalkWidth, RoadPatch.getSettings().roadStripLength, RoadPatch.getSettings().roadStripWidth).attr({
                                    'fill': 'white'
                                });
 
                           };
//Generated the Road
var roadBuilder=function(RoadPatch,Paper,grid){
                    return Paper.rect(grid.x,grid.y+RoadPatch.getSettings().sidewalkWidth, RoadPatch.getSettings().RoadPatchLength, RoadPatch.getSettings().RoadPatchWidth).attr({
                            'fill': '#3D6E99',
                            'stroke': '#3D6E99'
                        });
                       
                    };
//Initialization of the Road
var init=function(RoadPatch,Paper,grid){
    roadBuilder(RoadPatch,Paper,grid);
    stripBuilder(RoadPatch,Paper,grid);
    upperStrip(RoadPatch,Paper,grid);
    lowerStrip(RoadPatch,Paper,grid);
}



    for(var i=0;i<path.grid.length;i++)
    {
    var a = new RoadPatch();
    init(a,Paper,path.grid[i]);
    }
});
