import pyautogui
import webbrowser
import pywhatkit
from time import sleep

#webbrowser.open("https://web.whatsapp.com/send?phone=34680683625")  
# sleep(10)

# pyautogui.typewrite("Hola como estas?\nEsta es la segunda línea0\nEsta es la tercera línea0")
# pyautogui.press("enter")

# pywhatkit.sendwhatmsg("+34680683625", "Mensaje programado", 18, 14)
# pywhatkit.sendwhatmsg_instantly("+34680683625", "Hola como estas?\nEsta es la segunda línea3\nEsta es la tercera línea3")
# pyautogui.press("send")

"""with open ("mensaje1.txt", "r") as file:
    for line in file:
        # pywhatkit.sendwhatmsg_instantly("+34680683625", line)
        pyautogui.typewrite(line)
        pyautogui.press("enter")"""

with open ("servidor\scripts\Envia-Whatsapps\mensaje1.txt", "r") as file:
    text = ""
    for line in file:
        text += line + "\n"
    pywhatkit.sendwhatmsg_instantly("+34680683625", text)
        # pyautogui.typewrite(line)
        # pyautogui.press("enter")

'''with open ("mensaje1.txt", "r") as file:
    for line in file:
        # pywhatkit.sendwhatmsg_instantly("+34680683625", line)
        pyautogui.typewrite(line)
        """Nota: aunque no estamos presionando "enter" en cada iteración, 
            cuando escribe una nueva línea, empuja a la anterior haciéndole imprimirse"""
    pyautogui.press("enter")'''

# paquete para llamadas: twilio:
"""tienes que registrarte, obtener un id de cliente y una ¿key? 
    Luego se tiene que crear un cliente que será el que haga las llamadas.
    Es de pago pero tenemos 14 dólares de prueba."""