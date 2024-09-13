from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data', methods=['POST'])
def data():
    received_data = request.json
    # Здесь вы можете обработать полученные данные,
    # например, выполнить некоторые вычисления или сохранить их
    response_data = {'message': 'Данные получены', 'received': received_data}
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
