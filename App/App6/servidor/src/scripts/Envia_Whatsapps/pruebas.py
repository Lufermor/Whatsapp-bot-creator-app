
values = dict([('SmsMessageSid', 'SM6246bdbb242e446bed3a'), ('NumMedia', '0'), ('ProfileName', 'Fernando Moreno'), ('SmsSid', 'SM6246bdbb242e446bed3'), ('WaId', '34680'), ('SmsStatus', 'received'), ('Body', 'Hola'), ('To', 'whatsapp:+141552'), ('NumSegments', '1'), ('ReferralNumMedia', '0'), ('MessageSid', 'SM6246bdbb242e446bed3ae4541'), ('AccountSid', 'AC88003bb9a878075d4f0'), ('From', 'whatsapp:+34680'), ('ApiVersion', '2010-04-01')])
print(values['To'].split('+')[1])
print(values['From'].split('+')[1])


import datetime

class User():
    """Clase que representa a un usuario y lo vincula con una tabla en la BBDD"""
    __tablename__ = "usuarios"

    def hablar(self):
        print("Hola")

Steven = User()
Steven.hablar()