/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[(typeof (djConfig)!="undefined"&&djConfig.scopeMap&&djConfig.scopeMap[0][1])||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dijit.DialogUnderlay"],["require","dijit._Widget"],["require","dijit._Templated"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dijit.DialogUnderlay"]){_4._hasResource["dijit.DialogUnderlay"]=true;_4.provide("dijit.DialogUnderlay");_4.require("dijit._Widget");_4.require("dijit._Templated");_4.declare("dijit.DialogUnderlay",[_5._Widget,_5._Templated],{templateString:"<div class='dijitDialogUnderlayWrapper'><div class='dijitDialogUnderlay' dojoAttachPoint='node'></div></div>",dialogId:"","class":"",attributeMap:{id:"domNode"},_setDialogIdAttr:function(id){_4.attr(this.node,"id",id+"_underlay");},_setClassAttr:function(_7){this.node.className="dijitDialogUnderlay "+_7;},postCreate:function(){_4.body().appendChild(this.domNode);},layout:function(){var is=this.node.style,os=this.domNode.style;os.display="none";var _8=_5.getViewport();os.top=_8.t+"px";os.left=_8.l+"px";is.width=_8.w+"px";is.height=_8.h+"px";os.display="block";},show:function(){this.domNode.style.display="block";this.layout();this.bgIframe=new _5.BackgroundIframe(this.domNode);},hide:function(){this.bgIframe.destroy();this.domNode.style.display="none";},uninitialize:function(){if(this.bgIframe){this.bgIframe.destroy();}this.inherited(arguments);}});}}};});