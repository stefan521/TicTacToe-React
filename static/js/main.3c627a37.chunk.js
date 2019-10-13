(window.webpackJsonptictactoe=window.webpackJsonptictactoe||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),i=n.n(s),u=(n(14),n(1)),c=n(2),o=n(4),l=n(3),v=n(5);function m(e){var t=e.onClick,n=e.winSquare,a=e.value;return r.a.createElement("div",{className:"grid-item"},r.a.createElement("button",{type:"button",onClick:t,className:!0===n&&"X"===a?"win-x square":!0===n&&"O"===a?"win-o square":"square"},a))}var d=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={boardSize:9},n}return Object(v.a)(t,e),Object(c.a)(t,[{key:"isWinSquare",value:function(e){var t=this.props.winLine;return!(!t||!t.includes(e))}},{key:"renderSquare",value:function(e){var t=this.props.squares,n=this.props.onClick;return r.a.createElement(m,{value:t[e],onClick:function(){return n(e)},winSquare:this.isWinSquare(e),key:e})}},{key:"render",value:function(){for(var e=Array(9),t=this.state.boardSize,n=0;n<t;n+=1)e[n]=this.renderSquare(n);return r.a.createElement("div",{className:"board-wrapper"},r.a.createElement("div",{className:"game-board"},e))}}]),t}(r.a.Component);var h=function(e){var t=e.status,n=e.xIsNext;return r.a.createElement("div",{className:"game-status"},function(e,t){return e.gameEnded&&e.winner?"Winner: ".concat(e.winner):e.gameEnded?"Draw":"Next player: ".concat(!0===t?"X":"O")}(t,n))},p=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={descending:!0},n}return Object(v.a)(t,e),Object(c.a)(t,[{key:"getPlaySummary",value:function(e){if(null===e.player)return"go to game start";var t="go to move ".concat(e.player," at "),n=e.square%3,a=Math.floor(e.square/3);return a=2-a,t+"(".concat(n,", ").concat(a,")")}},{key:"getMoveAtIndex",value:function(e){var t=this.state.descending,n=this.props.moves;return t?e:n.length-e-1}},{key:"getMoves",value:function(){var e=this,t=this.state.descending,n=this.props.moves,a=this.props.onClick,s=this.props.stepNumber;return(t?n:n.slice().reverse()).map(function(t,n){var i=e.getPlaySummary(t);return r.a.createElement("button",{type:"button",onClick:function(){return a(e.getMoveAtIndex(n))},style:e.getMoveAtIndex(n)===s?{color:"rgb(206, 41, 151)"}:{color:"white"}},i)})}},{key:"reverseMoves",value:function(){var e=this.state.descending;this.setState({descending:!e})}},{key:"render",value:function(){var e=this,t=this.state.descending,n=this.props.xIsNext,a=this.props.status;return r.a.createElement("div",{className:"game-info"},r.a.createElement("div",{className:"next-player"},r.a.createElement(h,{xIsNext:n,status:a})),r.a.createElement("div",{className:"history"},r.a.createElement("button",{type:"button",id:"button-reverse",onClick:function(){return e.reverseMoves()}},"view moves ".concat(t?"descending":"ascending")),this.getMoves()))}}]),t}(r.a.Component),f=n(8);function b(e){var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=function(e,t){for(var n=0;n<e.length;n+=1){var a=Object(f.a)(e[n],3),r=a[0],s=a[1],i=a[2];if(t[r]&&t[r]===t[s]&&t[r]===t[i])return{gameEnded:!0,winner:t[r],line:e[n]}}return null}(t,e);if(n)return n;var a=function(e,t){return t.includes(null)?null:{gameEnded:!0,winner:null,line:null}}(0,e);return a||{gameEnded:!1,winner:null,line:null}}var g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],moves:[{player:null,square:null}],stepNumber:0,xIsNext:!0},n}return Object(v.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history,n=this.state.stepNumber,a=this.state.xIsNext,r=this.state.moves,s=t.slice(0,n+1),i=r.slice(0,n+1),u=s[s.length-1].squares.slice(),c=a?"X":"O";b(u).gameEnded||u[e]||(u[e]=c,this.setState({history:s.concat([{squares:u}]),moves:i.concat({player:c,square:e}),stepNumber:s.length,xIsNext:!a}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e=this,t=this.state.history,n=this.state.stepNumber,a=this.state.xIsNext,s=this.state.moves,i=t[n],u=b(i.squares);return r.a.createElement("div",{className:"game"},r.a.createElement(d,{squares:i.squares,onClick:function(t){return e.handleClick(t)},winLine:u.line}),r.a.createElement(p,{moves:s,stepNumber:n,onClick:function(t){return e.jumpTo(t)},status:u,xIsNext:a}))}}]),t}(r.a.Component);i.a.render(r.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.3c627a37.chunk.js.map