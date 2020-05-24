package com.example.omikuji

//import android.R
import android.graphics.Color
import android.os.Bundle
import android.util.Log
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_main.*
import java.util.*


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        getOmikujiButton.setOnClickListener {
            // Code here executes on main thread after user presses button
            //Log.v("MainActivity", "Button Clicked")
            val results = arrayOf("excellent luck", "midium luck","luck","No luck :(")
            val n = Random().nextInt(results.count())

            if(n==0){
                resultTextView.setTextColor(Color.RED)
            }
            else{
                resultTextView.setTextColor(Color.parseColor("#808080"))
            }
            resultTextView.text = results.get(n)
        }
    }
}
