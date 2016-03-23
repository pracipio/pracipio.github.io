from flask import Flask, request, url_for,render_template,jsonify


app = Flask(__name__)#,static_url_path='')

#  don't run uswgi as root - instead tell nginx what wsgi ports to listen to in nginx.conf
#  start each app instance on its own port  
#  uwsgi --socket 127.0.0.1:8080 -w skunkworks:app --enable-threads --touch-reload=./reload.ini &
#  sudo lsof -i :8080 # check what is running on port 8080

@app.route("/")
@app.route("/index")
@app.route("/home")
def index():
	return render_template("welcome_message.html")

@app.route("/contact")
def about():
  return render_template("contact.html")



if __name__ == '__main__':
   app.run(debug=True)
