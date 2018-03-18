define(function(require) {
    'use strict';

    const d3Array = require('d3-array');
    const d3Axis = require('d3-axis');
    const d3Collection = require('d3-collection');
    const d3Dispatch = require('d3-dispatch');
    const d3Ease = require('d3-ease');
    const d3Format = require('d3-format');
    const d3Scale = require('d3-scale');
    const d3Shape = require('d3-shape');
    const d3Selection = require('d3-selection');
    const d3Transition = require('d3-transition');
    const d3TimeFormat = require('d3-time-format');

    const {exportChart} = require('./helpers/export');
    const colorHelper = require('./helpers/color');

    const {
        formatIntegerValue,
        formatDecimalValue,
        isInteger,
        uniqueId
    } = require('./helpers/number');

    /**
     * @typedef ScatterPlotData
     * @type {Object[]}
     * @property {String} name         Name of the group (required)
     * @property {Number} x     Quantity of the group (required)
     * @property {Number} y   Percentage of the total (optional)
     * @property {Number} [size]           Identifier for the group required for legend feature (optional)
     *
     * @example
     * [
     *     {
     *         name: 'junior',
     *         x: 123,
     *         y: 24,
     *         size: 95
     *     },
     *     {
     *         name: 'sophomore',
     *         x: 53,
     *         y: 31,
     *         size: 48
     *     },
     *     {
     *         name: 'junior',
     *         x: 631,
     *         y: 321,
     *         size: 234
     *     }
     * ]
     */

    /**
     * Reusable Donut Chart API class that renders a
     * simple and configurable donut chart.
     *
     * @module Scatter-plot
     * @tutorial scatter-plot
     * @requires d3-array, d3-dispatch, d3-ease, d3-scale, d3-selection
     *
     * @example
     * let scatterPlot = scatterPlot();
     *
     * scatterPlot
     *     .width(500)
     *     .aspectRatio(1.5);
     *
     * d3Selection.select('.css-selector')
     *     .datum(dataset)
     *     .call(scatterPlot);
     */
    return function module() {

        let margin = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        },
        width = 960,
        height = 500,
        
        dataPoints,
        dataPointsZeroed,

        xScale,
        xAxis,
        yScale,
        yAxis
        
        isAnimated,
        ease = d3Ease.easeQuadInOut,
        areaAnimationDuration = 1000
        
        svg,
        chartWidth, chartHeight;

        
        function exports(_selection) {
            _selection.each(function(_data) {
                console.log('this data', _data);
            });    
        }


        /**
         * Gets or Sets the width of the chart
         * @param  {Number} _x              Desired width for the graph
         * @return {Number | module}    Current width or Donut Chart module to chain calls
         * @public
         */
        exports.width = function(_x) {
            if (!arguments.length) {
                return width;
            }
            width = _x;

            return this;
        };

        return exports;
    };
});