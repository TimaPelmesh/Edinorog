from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/message', methods=['POST'])
def message():
    user_message = request.json.get('message')
    # Ваш ИИ может быть более сложным. Здесь простой в качестве примера:
    response_message = f"Это ответ на ваше сообщение '{user_message}'."
    return jsonify({'response': response_message})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
