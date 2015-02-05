var nchart=angular.module('nchart', []);

nchart.directive('barchart', function() {
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        scope : {
            barChartData : '=data'
        },
        template : '<canvas></canvas>',

        link : function(scope, element, attrs) {
            var ctx = element[0].getContext("2d");
            scope.myBar = new Chart(ctx).Bar(scope.barChartData, {
                responsive : true
            });
        }
    }
});

nchart.directive('linechart', function() {
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        scope : {
            data : '=data',
            option : '=option'
        },
        template : '<canvas></canvas>',

        link : function(scope, element, attrs) {
            var ctx = element[0].getContext("2d");
            scope.myLine = new Chart(ctx).Line(scope.data, {
                responsive : true
            });
        }
    }
});


nchart.directive('piechart', function() {
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        scope : {
            data : '=data'
        },
        template : '<canvas></canvas>',

        link : function(scope, element, attrs) {
            var ctx = element[0].getContext("2d");
            scope.myLine = new Chart(ctx).Pie(scope.data, {
                responsive : true
            });
        }
    }
});

nchart.directive('doughnutChart', function() {
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        scope : {
            data : '=data'
        },
        template : '<canvas></canvas>',

        link : function(scope, element, attrs) {
            var ctx = element[0].getContext("2d");
            scope.myLine = new Chart(ctx).Doughnut(scope.data, {
                responsive : true
            });
        }
    }
});