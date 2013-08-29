define([
    "engineVendor/spin",,
    "backbone"
],

function( Spinner ) {

    return {

        metadata: $("meta[name=zeega]").data(),

        getWebRoot: function() {
            return "http:" + this.metadata.hostname + this.metadata.root;
        },

        getApi: function() {
            return this.getWebRoot() + "api/";
        },

        getUserId: function() {
            return this.metadata.userId;
        },

        getMediaServerUrl: function() {
            return this.getWebRoot() + this.metadata.mediaRoot;
        },

        emit: function( event, args ) {
            // other things can be done here as well
            this.trigger( event, args );
        },

        spinner: new Spinner({
            lines: 13, // The number of lines to draw
            length: 10, // The length of each line
            width: 4, // The line thickness
            radius: 30, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: '#FFF', // #rgb or #rrggbb
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: 'auto', // Top position relative to parent in px
            left: 'auto' // Left position relative to parent in px
        }),

        spin: function( el ) {
            var target = el || this.layout.el;

            this.spinner.spin( target );
        },

        spinStop: function() {
            this.spinner.stop();
        }
    }
});