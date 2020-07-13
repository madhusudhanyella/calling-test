(this["webpackJsonpcalling-fm"]=this["webpackJsonpcalling-fm"]||[]).push([[0],{1039:function(e,t,n){var i={"./fm.liveswitch":249,"./fm.liveswitch.d.ts":1040,"./fm.liveswitch.js":249,"./package":393,"./package.json":393};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=a,e.exports=o,o.id=1039},1046:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(22),s=n.n(a),r=(n(416),n(129)),c=n(132),u=n(407),d=n(395),l=n(396),h=n(409),p=n(406),f=n(183),m=n(29),g=function(e){var t=e.onJoin,n=o.a.useState(""),i=Object(f.a)(n,2),a=i[0],s=i[1],r=o.a.useState(""),c=Object(f.a)(r,2),u=c[0],d=c[1],l=o.a.useState(""),h=Object(f.a)(l,2),p=h[0],g=h[1];return o.a.createElement("div",null,o.a.createElement("div",null,"Channel Id:",o.a.createElement(m.Input,{type:"text",value:a,onChange:s})),o.a.createElement("div",null,"User Id:",o.a.createElement(m.Input,{type:"text",value:u,onChange:d})),o.a.createElement("div",null,"Device Id:",o.a.createElement(m.Input,{type:"text",value:p,onChange:g})),o.a.createElement("div",null,o.a.createElement(m.Button,{content:"JOIN",onClick:function(){return t({channelId:a,userId:u,deviceId:p})}})))},S=n(249),v=S.Client,C=S.Token,M=S.ChannelClaim,O=S.LocalMedia,A=S.AudioStream,E=S.VideoStream,I=S.RemoteMedia,V=S.DomLayoutManager,y="https://demo.liveswitch.fm:8443/sync",U=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={isAudio:!0,isVideo:!1,isScreen:!1,peers:{},remoteMedias:[]},e.toggleAudio=function(){e.setState((function(e){return{isAudio:!e.isAudio}}))},e.toggleVideo=function(){e.setState((function(e){return{isVideo:!e.isVideo}}))},e.toggleScreen=function(){e.setState((function(e){return{isScreen:!e.isScreen}}))},e.getActionsStatusAsString=function(){return JSON.stringify({isAudio:e.state.isAudio,isVideo:e.state.isVideo,isScreen:e.state.isScreen})},e.sendActionStatusToAll=function(){e.channel&&e.channel.sendMessage(e.getActionsStatusAsString())},e.sendAudioVideoUpConnections=function(){var t=new A(e.audioLM,null);e.upAudioConnection=e.channel.createSfuUpstreamConnection(t),e.upAudioConnection.setTag("AUDIO"),e.upAudioConnection.open();var n=new E(e.videoLM,null);e.upVideoConnection=e.channel.createSfuUpstreamConnection(n),e.upVideoConnection.setTag("VIDEO"),e.upVideoConnection.open()},e.sendUpScreenConnection=function(){var t=new E(e.screenLM,null);e.upScreenConnection=e.channel.createSfuUpstreamConnection(t),e.upScreenConnection.setTag("SCREEN"),e.upScreenConnection.open()},e.closeUpScreenConnection=function(){e.upScreenConnection.close()},e.listenToChannel=function(){e.channel.addOnRemoteUpstreamConnectionOpen((function(t){var n=t.getTag();"SCREEN"===n&&e.state.isScreen&&e.toggleScreen();var i,o=new I,a=t.getUserId();"AUDIO"===n?i=new A(null,o):(i=new E(null,o),e.setState((function(e){return{remoteMedias:[].concat(Object(u.a)(e.remoteMedias),[{userId:a,type:n,remoteMedia:o}])}}))),"SCREEN"===n&&e.layoutManager.addRemoteView(o.getId(),o.getView()),e.channel.createSfuDownstreamConnection(t,i).open()})),e.channel.addOnRemoteUpstreamConnectionClose((function(t){var n=t.getTag(),i=t.getUserId(),o=e.state.remoteMedias.find((function(e){return e.userId===i&&e.type===n}));o&&(e.layoutManager.removeRemoteView(o.remoteMedia.getId()),e.setState((function(e){return{remoteMedias:e.remoteMedias.filter((function(e){return e!==o}))}})))})),e.channel.addOnUserMessage((function(t,n){var i=t.getUserId(),o=JSON.parse(n);if(e.setState((function(e){return{peers:Object(c.a)(Object(c.a)({},e.peers),{},Object(r.a)({},i,{isVideo:o.isVideo,isAudio:o.isAudio,isScreen:o.isScreen}))}})),"ACKNOWLEDGEMENT"!==o.type){var a=JSON.parse(e.getActionsStatusAsString());a.type="ACKNOWLEDGEMENT",e.channel.sendUserMessage(i,JSON.stringify(a))}})),e.channel.addOnMessage((function(t,n){var i=t.getUserId();if(i!==e.channel.getUserId()){var o=JSON.parse(n);e.setState((function(e){return{peers:Object(c.a)(Object(c.a)({},e.peers),{},Object(r.a)({},i,{isVideo:o.isVideo,isAudio:o.isAudio,isScreen:o.isScreen}))}}))}})),e.channel.addOnRemoteClientJoin((function(t){var n=t.getUserId();e.channel.sendUserMessage(n,e.getActionsStatusAsString())}))},e.handleJoin=function(t){var n=t.channelId,i=t.userId,o=t.deviceId;e.client=new v(y,"my-app-id",i,o);var a=C.generateClientRegisterToken(e.client,[new M(n)],"--replaceThisWithYourOwnSharedSecret--");e.client.register(a).then((function(t){e.channel=t[0],e.sendAudioVideoUpConnections(),e.listenToChannel()}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.audioLM=new O(!0,!1),this.audioLM.start(),this.videoLM=new O(!1,!0),this.screenLM=new O(!1,!0,!0),this.layoutManager=new V(this.layoutRef)}},{key:"componentDidUpdate",value:function(e,t){var n=this;t.isAudio!==this.state.isAudio&&(this.audioLM&&this.audioLM.getAudioTrack().setMuted(!this.state.isAudio),this.sendActionStatusToAll()),t.isVideo!==this.state.isVideo&&(this.state.isVideo?this.videoLM.start():this.videoLM.stop(),this.sendActionStatusToAll()),t.isScreen!==this.state.isScreen&&(this.state.isScreen?this.screenLM.start().then((function(){n.sendUpScreenConnection()})):this.screenLM.stop().then((function(){n.closeUpScreenConnection()})),this.sendActionStatusToAll()),t.peers===this.state.peers&&e.remoteMedias===this.state.remoteMedias||Object.keys(this.state.peers).forEach((function(e){if((t.peers[e]||n.state.peers[e])&&(t.peers[e]||{}).isVideo!==(n.state.peers[e]||{}).isVideo){var i=n.state.remoteMedias.find((function(t){return t.userId===e}));i&&(n.state.peers[e].isVideo?n.layoutManager.addRemoteView(i.remoteMedia.getId(),i.remoteMedia.getView()):n.layoutManager.removeRemoteView(i.remoteMedia.getId()))}}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(g,{onJoin:this.handleJoin}),o.a.createElement(m.Button,{onClick:this.toggleVideo,content:"TURN VIDEO ".concat(this.state.isVideo?"OFF":"ON")})," ",o.a.createElement("br",null),o.a.createElement(m.Button,{onClick:this.toggleAudio,content:"TURN AUDIO ".concat(this.state.isAudio?"OFF":"ON")})," ",o.a.createElement("br",null),o.a.createElement(m.Button,{onClick:this.toggleScreen,content:"TURN SCREEN ".concat(this.state.isScreen?"OFF":"ON")})," ",o.a.createElement("br",null),o.a.createElement("div",null,JSON.stringify(this.state.peers)),o.a.createElement("div",{className:"layout",ref:function(t){return e.layoutRef=t}}))}}]),n}(o.a.Component);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(U,null)),document.getElementById("root"))},411:function(e,t,n){e.exports=n(1046)},416:function(e,t,n){},722:function(e,t){}},[[411,1,2]]]);
//# sourceMappingURL=main.88426334.chunk.js.map