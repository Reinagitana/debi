<%@ WebHandler Language="C#" Class="CreateContentItem" %>

using System;
using System.Web;

namespace YourNamespace
{
    public class CreateContentItem : IHttpHandler {

        public void ProcessRequest(HttpContext context)
        {
            string title = context.Request["title"];
            string info = context.Request["info"];
            string img = context.Request["img"];
            int userId = -1;
            DBFunctions.InsertContent(title, info, img);
            context.Response.Write("Instrumental details were saved");
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}
