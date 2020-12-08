import numpy as np
import pandas as pd 
import matplotlib.pyplot as plt
import pickle as pkl
from keras.models import Sequential, load_model
from keras.layers import Dense
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
from keras.utils import to_categorical
from gensim.models import KeyedVectors
from gensim.scripts.glove2word2vec import glove2word2vec
import tensorflow as tf
import re
import string

physical_devices = tf.config.list_physical_devices('GPU') 
tf.config.experimental.set_memory_growth(physical_devices[0], True)

def load_glove_model():
    return pkl.load(open('..\..\..\data\glove_model.p','rb'))

def load_keras():
    return load_model('..\..\model_batch64')

glove_model = load_glove_model()
review_model = load_keras()

def vectorizeReview(review):
    count = 0
    vectors = []
    review = re.sub('['+string.punctuation+']', '', review).split() 
    index = 0
    for word in review:
        isNan = True
        try:
            vectors.append(glove_model.get_vector(word))
            isNan =False
        except KeyError:
            count += 1

    vector = np.mean(np.array(vectors), axis=0)
    if isNan:
        indices.append(index)
    else:
        index += 1

    return np.array([vector])
 
def predictReview(text):
    vector_text = vectorizeReview(text)
    predict = review_model.predict(vector_text)
    print(predict)
    return np.argmax(predict)+1
