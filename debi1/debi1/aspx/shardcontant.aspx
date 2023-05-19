<%@ Page Title="" Language="C#" MasterPageFile="~/Mpages/MasterPage.master" AutoEventWireup="true" CodeFile="shardcontant.aspx.cs" Inherits="aspx_shardcontant" %>

<asp:Content ID="Content1" ContentPlaceHolderID="phHead" Runat="Server">
    <script src="../Scripts/rivers.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="phBody" Runat="Server">

                <form id="form">
                    <h1 class="title2">התחברות לאתר</h1>
                    <div class="form-control">
                        <label for="username"><u>שם משתמש:</u></label>
                        <input type="text" placeholder="שם משתמש" id="username" />
                        <small></small>
                    </div><br />

                    <div class="form-control">
                        <label for="password"><u>סיסמא:</u></label>
                        <input type="password" placeholder="סיסמא" id="password" />
                        <small></small>
                    </div><br />

                    <button class="form button" type="submit">כניסה</button>
                    <button class="form button" type="button" onclick="clearInput()" value="Clear form">ניקוי</button>

                    <a href="registaration.aspx"> להרשמה:</a>
                    <script src="../Scripts/login.js"></script>
                </form>

    <table class="table14" id="Tb1" border="1"> </table>  

</asp:Content>