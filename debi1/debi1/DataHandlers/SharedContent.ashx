<%@ WebHandler Language="C#" Class="Handler" %>

using System;
using System.Web;
using System.Web.Script.Serialization;

public class Handler : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        object[] Instruments = DBFunctions.SelectAllContents();
        JavaScriptSerializer ser = new JavaScriptSerializer();
            string responseText = ser.Serialize(Instruments);
            context.Response.Write (responseText);
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}