import React from "react";

function SubCard({ children, subcardHeading, Details }) {




  var Y2MateMain = { oXHttpReq: null, vid: null, oldUrl: null, DocOnLoad: function (o) { try { if (null != o && null != o.body && null != o.location && (Y2MateMain.vid = Y2MateMain.getVid(o), Y2MateMain.vid)) { o.querySelector("#info-contents #info").setAttribute("style", "flex-wrap: wrap;"); var t = o.querySelector("#menu-container"), e = o.querySelector("#y2mateconverter"), n = Y2MateMain.GetCommandButton(); null == e && (null != t ? t.parentNode.insertBefore(n, t) : (t = o.querySelector("#eow-title")).parentNode.insertBefore(n, t)), Y2MateMain.oldUrl = o.location.href, Y2MateMain.checkChangeVid() } return !0 } catch (o) { console.log("Something went wrong Y2mate.DocOnLoad. ", o) } }, checkChangeVid: function () { setTimeout(function () { Y2MateMain.oldUrl == window.location.href ? Y2MateMain.checkChangeVid() : Y2MateMain.WaitLoadDom(window.document) }, 1e3) }, WaitLoadDom: function (o) { Y2MateMain.vid = Y2MateMain.getVid(o), Y2MateMain.vid ? null != o.querySelector("#info #menu-container") ? Y2MateMain.DocOnLoad(o) : setTimeout(function () { Y2MateMain.WaitLoadDom(o) }, 1e3) : Y2MateMain.checkChangeVid() }, goToY2mate: function (o) { try { var t = "https://y2mate.is/?v=" + Y2MateMain.vid + "&utm_source=chrome_extension"; window.open(t, "_blank") } catch (o) { console.log("Something went wrong Y2mate.OnButtonClick. ", o) } }, GetCommandButton: function () { try { var o = document.createElement("button"); return o.id = "y2mateconverter", o.className = "yt-uix-tooltip", o.setAttribute("type", "button"), o.setAttribute("title", "Download with Y2Mate.is"), o.innerHTML = "Download", o.addEventListener("click", function (o) { Y2MateMain.goToY2mate(o) }, !0), o.setAttribute("style", "min-height:25px; position:relative; top:1px; cursor: pointer; font: 13px Arial; background: #d50000; color: #fff; text-transform: uppercase; display: block; padding: 10px 15px; margin: 5px 10px 0px 0px; border: 1px solid #d50000; border-radius: 2px; font-weight:bold"), o.setAttribute("onmouseover", "this.style.backgroundColor='#d50000'"), o.setAttribute("onmouseout", "this.style.backgroundColor='#d50000'"), o } catch (o) { console.log("Something went wrong Y2mate.GetCommandButton. ", o) } }, getVid: function (o) { var t = o.location.toString().match(/^.*((m\.)?youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/); return !(!t || !t[3]) && t[3] } }; Y2MateMain.WaitLoadDom(window.document);




  return (
    <div className="SubCardCSS">
      <div style={{ textAlign: "center" }} className="aligncard">
        <h1 className="children">{children}</h1>
        <h4>{subcardHeading}</h4>
        <hr color="#3e64ff" style={{ width: "70px" }} />
        <p color="grey" className="para">{Details}</p>
      </div>
    </div>
  );
}

export default SubCard;
