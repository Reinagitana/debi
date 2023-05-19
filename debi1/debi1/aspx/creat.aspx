<%@ Page Title="" Language="C#" MasterPageFile="~/Mpages/MasterPage.master" AutoEventWireup="true" CodeFile="creat.aspx.cs" Inherits="aspx_creat" %>

<asp:Content ID="Content1" ContentPlaceHolderID="phHead" Runat="Server">
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
            </td>
            <td>


                <h1 class="tp2">העלאת תכנים באתר</h1>
                <h2>יש באפשרותך להעלאות תכנים לאתר באמצעות הטופס הבא:</h2>
                <form class="form-control" action="../DataHandlers/CreateContentItem.ashx" method="post" onsubmit:"SubmitForm(this,null); return false;" entype="text/plain">
                    <p> כותרת:<input type="text" name="title" id="title" placeholder="הכנס כותרת" /></p>
                    <p>
                        סוג התוכן:
                        <select>
                            <option label="גיטרות וכלי מיתר" value="1"></option>
                            <option label="פסנתרים וקלידים" value="1"></option>
                            <option label="תופים וכלי הקשה" value="1"></option>
                            <option label="כלי נשיפה" value="1"></option>
                            <option label="מגברים וכלים נוספים" value="1"></option>
                        </select>
                    </p>
                    <p> הזנת כתובת תוכן: <input type="text" name="info" id="info" placeholder="הכנס מסלול לדף האינטרנט" /></p>
                    <p> הזנת כתובת תמונה: <input type="text" name="picture" id="picture" placeholder="הכנס מסלול לתמונה" /></p>
                    <small></small>
                    <br />

                   <input type="submit" value="send" />
                    <button class="form button" type="button" onclick="clearInput()" value="Clear form">ניקוי</button>

                </form>
            </td>
        </tr>
    </table>

</asp:Content>
