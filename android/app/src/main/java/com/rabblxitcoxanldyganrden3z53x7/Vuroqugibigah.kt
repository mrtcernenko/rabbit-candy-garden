/* cf-intake:v1 */
package com.rabblxitcoxanldyganrden3z53x7

// autosetup-split-begin
// autosetup-split-end
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

class Vuroqugibigah(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV2 = rabbitcantdnygsarwdenVuroqugibigahObfV2ByteFold("o50fed")
        return "Vuroqugibigah"
    }

    @ReactMethod
    fun rowoheforu(fields: ReadableArray, bodyPlain: String, promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV2 = rabbitcantdnygsarwdenVuroqugibigahObfV2ByteFold("o50fed")
        try {
            promise.resolve(CrabbitcantdnygsarwdenIntakePart01.assemble(fields, bodyPlain))
        } catch (e: Exception) {
            promise.resolve("{\"cookie\":\"0\",\"header\":\"0\",\"body\":\"\"}")
        }
    }

    @ReactMethod
    fun fojovimudisexe(json: String, promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV2 = rabbitcantdnygsarwdenVuroqugibigahObfV2ByteFold("o50fed")
        try {
            promise.resolve(CrabbitcantdnygsarwdenIntakePart02.mapResponse(JSONObject(if (json.isEmpty()) "{}" else json)))
        } catch (e: Exception) {
            val empty = Arguments.createMap()
            empty.putNull("redirectUrl")
            empty.putNull("redirectUrlInitial")
            empty.putNull("error")
            empty.putBoolean("blockUser", false)
            promise.resolve(empty)
        }
    }

    @ReactMethod
    fun cilopikejir(baseUrl: String, dataValue: String, headerValue: String, body: String, promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV2 = rabbitcantdnygsarwdenVuroqugibigahObfV2ByteFold("o50fed")
        Thread {
            try {
                val connection = (URL(CrabbitcantdnygsarwdenIntakePart01.workerUrl(baseUrl)).openConnection() as HttpURLConnection)
                connection.requestMethod = "POST"
                connection.connectTimeout = 25000
                connection.readTimeout = 25000
                connection.doOutput = true
                connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded")
                if (dataValue.isNotEmpty()) {
                    connection.setRequestProperty("Cookie", "mev" + "=" + dataValue)
                }
                if (headerValue.isNotEmpty()) {
                    connection.setRequestProperty("X-Gih", headerValue)
                }
                connection.setRequestProperty("Accept", "text/plain, */*")
                connection.outputStream.use { stream ->
                    stream.write(body.toByteArray(Charsets.UTF_8))
                }
                val code = connection.responseCode
                val stream = if (code in 200..299) connection.inputStream else connection.errorStream
                val text = stream?.bufferedReader()?.use { it.readText() } ?: ""
                promise.resolve(text)
            } catch (e: Exception) {
                promise.resolve("")
            }
        }.start()
    }
}

/* obfuscation-batch:v2 */
private fun rabbitcantdnygsarwdenVuroqugibigahObfV2ByteFold(s: String): Int {
    var x = 59
    for (i in s.indices) x = (x + s[i].code * 24) and 6155
    return x
}
