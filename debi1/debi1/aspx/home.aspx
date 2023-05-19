<%@ Page Title="" Language="C#" MasterPageFile="~/Mpages/MasterPage.master" AutoEventWireup="true" CodeFile="home.aspx.cs" Inherits="aspx_home" %>

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
                <h1 class="title3">Instrusell</h1>
                <div class="D" dir="rtl">
                    אודות האתר: האתר מיועד לאוהבי מוסיקה.
                    באתר זה אפשר לשתף תמונות של כלי נגינה למכירה או סתם כלי נגינה שתרצו להשוויץ בהם (:
                    בנוסף אפשר לשתף לאו דווקא כלי נגינה, אפשר לשתף אביזרים למוסיקה כגון מגברים, מפרטים, עמוד תווים, כבלים ועוד בסגנון.
                    היי! רק לפני שנרשמים אם אתה לא מעריץ, Queen, Guns and roses ,Pink
                    Floyd, Beatles
                    כדאי מאוד שתתחיל, אלו תנאי הקבלה(;
                    כמו שהבנתם, הנושא העיקרי של האתר הוא מוסיקה מוסיקה ומוסיקה!
                    .
                </div>
                <table valign="top" border="1">
                    <tr>
                        <td class="gallery" colspan="2" dir="ltr"> Photo gallery</td>
                    </tr>

                    <tr>
                        <td class="gallery"> מערכת תופים אקוסטית sonor <img src="../Images/drums.png" top="30" width="250" /> </td>
                        <td class="gallery"> גיטרה בס ocean <img src="../Images/oceanbass.jpg" top="30" width="250" />  </td>
                        <td class="gallery"> פסנתר חשמלי casio <img src="../Images/elec.piano.png" top="30" width="250" /> </td>
                        <td class="gallery"> גיטרה אקוסטית מוגברת  cort <img src="../Images/acustic.guitar.png" top="30" width="250" /> </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</asp:Content>

