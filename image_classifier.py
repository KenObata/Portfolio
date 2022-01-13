import matplotlib.pyplot as plt
from tensorflow.keras import datasets, layers, models

# SSL set up for https://www.cs.toronto.edu/~kriz/cifar-10-python.tar.gz
import ssl
ssl._create_default_https_context = ssl._create_unverified_context
#******************

(training_images, training_labels), (testing_images, testing_labels) = datasets.cifar10.load_data()
training_images, testing_images = training_images/255, testing_images/255

class_names = ['Plane', 'Car', 'Bird','Cat','Deer', 'Dog', 'Frog', 'Horse', 'Ship', 'Truck']
for i in range(16):
    plt.subplot(4,4,i+1) #4 by 4 grid.
    # Not: subplot(row,col, index) *index* starts at 1 in the upper left corner so we need i+1.
    plt.xticks([])
    plt.yticks([])
    # show image
    plt.imshow(training_images[i], cmap=plt.cm.binary)
    plt.xlabel(class_names[training_labels[i][0]])

plt.show()

training_images=training_images[:20000]
training_labels=training_labels[:20000]
testing_images=testing_images[:4000]
testing_labels=testing_labels[:4000]

model = models.Sequential()

#use: (# of neurons, (3,3) matrix, activation="relu", input 32 pixcels, 3 colors RGB.)
model.add(layers.Conv2D(32, (3,3), activation="relu", input_shape=(32,32,3)))
model.add(layers.MaxPooling2D((2,2))) #every Conv2D requires MaxPooling2D.
model.add(layers.Conv2D(64, (3,3), activation="relu") )
model.add(layers.MaxPooling2D((2,2))) #every Conv2D requires MaxPooling2D.
model.add(layers.Conv2D(64, (3,3), activation="relu") )
model.add(layers.Flatten() ) #last layer needs to be flatten.

#we need a dense layer next
model.add(layers.Dense(64, activation="relu"))
model.add(layers.Dense(10, activation="softmax")) #softmax weights probability and sum(P()) == 1.

#compile defines how to evaluate the model. We're interested in accuracy only.
model.compile(optimizer="adam", loss='sparse_categorical_crossentropy', metrics=['accuracy'])

#epochs: how many times the models sees over and over again.
model.fit(training_images, training_labels, epochs=10, validation_data=(testing_images, testing_labels))

#Evaluate the model
loss, accuracy = model.evaluate(testing_images, testing_labels)
print("loss: ", loss)
print("accuracy: ", accuracy)

model.save('image_classifier.model')

#when you load the model again.
#model = models.load_model('image_classifier.model')



