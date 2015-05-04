require.config({
    paths: {
        "text": "libs/requirejs-text/text",
        "jquery": "libs/jquery/dist/jquery",
        "bootstrap": "libs/bootstrap/dist/js/bootstrap",
        "react": "libs/react/react-with-addons",
        "react-bootstrap": "libs/react-bootstrap/react-bootstrap",
    }
});

require(
    [
        'jquery',
        'bootstrap',
        'react',
        'react-bootstrap'
    ],
    function(jQuery,
             Bootstrap,
             React,
             ReactBootstrap) {
        "use strict";


        
        var CommentBox = React.createClass({displayName: "CommentBox",
            render: function() {
                return (
                    React.createElement("div", {className: "commentBox"}, 
                        "Hello, world! I am a CommentBox. fuckers", 
                        React.createElement(Grid, null, 
                            React.createElement(Row, {className: "show-grid"}, 
                                React.createElement(Col, {xs: 12, md: 8}, React.createElement("code", null, "<", 'Col xs={12} md={8}', " />")), 
                                React.createElement(Col, {xs: 6, md: 4}, React.createElement("code", null, "<", 'Col xs={6} md={4}', " />"))
                            ), 

                            React.createElement(Row, {className: "show-grid"}, 
                                React.createElement(Col, {xs: 6, md: 4}, React.createElement("code", null, "<", 'Col xs={6} md={4}', " />")), 
                                React.createElement(Col, {xs: 6, md: 4}, React.createElement("code", null, "<", 'Col xs={6} md={4}', " />")), 
                                React.createElement(Col, {xs: 6, md: 4}, React.createElement("code", null, "<", 'Col xs={6} md={4}', " />"))
                            ), 

                            React.createElement(Row, {className: "show-grid"}, 
                                React.createElement(Col, {xs: 6, xsOffset: 6}, React.createElement("code", null, "<", 'Col xs={6} xsOffset={6}', " />"))
                            ), 

                            React.createElement(Row, {className: "show-grid"}, 
                                React.createElement(Col, {md: 6, mdPush: 6}, React.createElement("code", null, "<", 'Col md={6} mdPush={6}', " />")), 
                                React.createElement(Col, {md: 6, mdPull: 6}, React.createElement("code", null, "<", 'Col md={6} mdPull={6}', " />"))
                            )
                        )
                    )
                );
            }
            
        });

        React.render(
            React.createElement(CommentBox, null),
            document.getElementById('content1')
        );
    });
