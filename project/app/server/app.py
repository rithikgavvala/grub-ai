from flask import Flask, request, jsonify
from flask import request
from model import predictReview
# import model

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict(): 
    data = request.json
    review = data['message']
    try:
        star_prediction = predictReview(review)
        print(star_prediction)
        return jsonify({ "stars" : star_prediction.item() })
    except:
        return jsonify({"stars": 0})

app.run(debug=True)
