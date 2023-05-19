<%@ Page Title="" Language="C#" MasterPageFile="~/Mpages/MasterPage.master" AutoEventWireup="true" CodeFile="registaration.aspx.cs" Inherits="aspx_registaration" %>

<asp:Content ID="Content1" ContentPlaceHolderID="phHead" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="phBody" Runat="Server">
         </td>
        </tr>
        <tr>
            <td>
                <h1 class="tp2">דף הרשמה</h1>
                <h2> אנא מלא תופס זה כדי ליצור את חשבונך</h2>
                <form id="form" class="form">
                    <div class="form-control">
                        <label for="firstname"><u>שם פרטי</u></label>
                        <input type="text" placeholder="שם פרטי" id="firstname" />
                        <small></small>
                    </div><br />

                    <div class="form-control">
                        <label for="lastname"><u>שם משפחה:</u></label>
                        <input type="text" id="lastname" placeholder="שם משפחה" />
                        <small></small>
                    </div><br />

                    <div class="form-control">
                        <label for="username"><u>שם משתמש:</u></label>
                        <input type="text" id="username" placeholder="שם משתמש" />
                        <small></small>
                    </div><br />

                    <div class="form-control">
                        <label for="password"><u>סיסמא:</u></label>
                        <input type="password" id="password" placeholder="סיסמא" />
                        <small></small>
                    </div><br />

                    <div class="form-control">
                        <label for="password2"><u>חזור על סיסמא:</u></label>
                        <input type="password" id="password2" placeholder="חזור על סיסמא" />
                        <small></small>
                    </div><br />

                    <div class="form-control">
                        <label for="phonenumber"><u>מספר טלפון:</u></label>
                        <input type="text" id="phone" placeholder="מספר טלפון" />
                        <small></small>
                    </div><br />

                    <div class="form-control">
                        <label for="email"><u>דואל:</u></label>
                        <input type="text" id="email" placeholder="דואל" />
                        <small></small>
                    </div><br />

                    <div class="form-control">
                        <label for="date"><u>תאריך לידה:</u></label>
                        <input type="date" placeholder="תאריך לידה:" id="birthday" />
                        <small></small>
                    </div><br />

                    <div><u>מגדר:</u></div>
                    <input type="radio" name="מין" />זכר
                    <input type="radio" name="מין" />נקבה<br><br>
                    <div><u>איזור מגורים:</u></div>
                    <select>
                        <option>צפון</option>
                        <option>מרכז</option>
                        <option>דרום</option>
                    </select><br><br>
                    <button class="form button" type="submit">כניסה</button>
                    <button class="form button" type="button" onclick="clearInput()" value="Clear form">ניקוי</button>
                    <script src="../Scripts/JavaScript.js"></script>
                </form>
            </td>
        </tr>
    </table>
</asp:Content>

