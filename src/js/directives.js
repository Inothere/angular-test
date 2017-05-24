var app = require('./app');
var d3 = require('d3');

app.directive('ipGroup', function(){
    return {
        restrict: 'E',
        replace: true,
        scope:{
            'version': '@'
        },
        template: '<div></div>',
        link: function(scope, element, attr) {
            var treeData =
            {
                "name": "Top Level",
                "children": [
                { 
                    "name": "Level 2: A",
                    "children": [
                    { "name": "Son of A" },
                    { "name": "Daughter of A" }
                    ]
                },
                { "name": "Level 2: B" }
                ]
            };
            // Set the dimensions and margins of the diagram
            var margin = {top: 20, right: 90, bottom: 30, left: 90},
                width = 960 - margin.left - margin.right,
                height = 500 - margin.top - margin.bottom;
            // append the svg object to the body of the page
            // appends a 'group' element to 'svg'
            // moves the 'group' element to the top left margin
            var svg = d3.select(element[0]).append("svg")
                .attr("width", width + margin.right + margin.left)
                .attr("height", height + margin.top + margin.bottom)
                .append("g").classed("node", true);
            var i = 0,
                duration = 750,
                root;
            // declares a tree layout and assigns the size
            
            // Assigns parent, children, height, depth
            root = d3.hierarchy(treeData, function(d) { return d.children; });
        }
    }
})