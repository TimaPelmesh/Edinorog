    from flask import Flask, render_template, request, jsonify
    from transformers import pipeline

    app = Flask(__name__)
    generator = pipeline('text-generation', model='gpt2')

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/generate', methods=['POST'])
    def generate():
        user_input = request.json['input']
        response = generator(user_input, max_length=100, num_return_sequences=1)
        return jsonify({'generated_text': response[0]['generated_text']})

    if __name__ == '__main__':
        app.run(debug=True)
    
