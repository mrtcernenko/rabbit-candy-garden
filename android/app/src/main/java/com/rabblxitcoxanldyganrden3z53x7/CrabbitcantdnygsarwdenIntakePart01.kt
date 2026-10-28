/* autosetup-split:v1 */
package com.rabblxitcoxanldyganrden3z53x7

import com.facebook.react.bridge.ReadableArray
import org.json.JSONObject
import java.net.URLEncoder

object CrabbitcantdnygsarwdenIntakePart01 {
    private val requiredFields = arrayOf("appId", "deviceID", "adId", "pushToken", "referer", "oneLink", "naming", "userAgent", "app_version", "androidId")
    private val cookieLayout = arrayOf("pad", "pad", "naming", "userAgent", "adId", "referer", "app_version", "pad", "pushToken", "pad", "appId")
    private val headerLayout = arrayOf("manufacturer", "pad", "pad", "device_model", "session_id", "event")
    private val dummyBodyKeys = arrayOf("lexofev", "komici")
    internal val extraQuery = linkedMapOf("pih" to "muvo", "qoco" to "jopin")
    private val fieldRoutes = linkedMapOf("appId" to "cookie", "deviceID" to "body", "adId" to "cookie", "pushToken" to "cookie", "referer" to "cookie", "oneLink" to "body", "naming" to "cookie", "userAgent" to "cookie", "app_version" to "cookie", "androidId" to "body", "event" to "header", "device_model" to "header", "manufacturer" to "header", "locale" to "body", "timezone" to "body", "network" to "body", "screen" to "body", "session_id" to "header", "play_integrity_token" to "body")

    fun assemble(fields: ReadableArray, bodyPlain: String): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        val values = LinkedHashMap<String, String>()
        for (pair in parseForm(bodyPlain)) {
            values[pair.first] = pair.second
        }
        for (index in requiredFields.indices) {
            val key = requiredFields[index]
            val field = if (index < fields.size()) fields.getString(index) ?: "" else ""
            if (field.isNotEmpty() || !values.containsKey(key)) values[key] = field
        }
        val cookie = CrabbitcantdnygsarwdenIntakePart02.packPipe(cookieLayout, values)
        val header = CrabbitcantdnygsarwdenIntakePart02.packPipe(headerLayout, values)
        val bodyParts = ArrayList<String>()
        for ((key, value) in values) {
            if (dummyBodyKeys.contains(key)) continue
            val route = fieldRoutes[key]
            if (route != null && route != "body") continue
            bodyParts.add(CrabbitcantdnygsarwdenIntakePart02.enc(key) + "=" + CrabbitcantdnygsarwdenIntakePart02.enc(value))
        }
        dummyBodyKeys.forEachIndexed { index, key ->
            bodyParts.add(CrabbitcantdnygsarwdenIntakePart02.enc(key) + "=" + CrabbitcantdnygsarwdenIntakePart02.enc((index + bodyPlain.length).toString()))
        }
        val json = JSONObject()
        json.put("cookie", cookie)
        json.put("header", header)
        json.put("body", bodyParts.joinToString("&"))
        return json.toString()
    }

    fun parseForm(plain: String): List<Pair<String, String>> {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        if (plain.isEmpty()) return emptyList()
        return plain.split("&").mapNotNull { part ->
            if (part.isEmpty()) return@mapNotNull null
            val at = part.indexOf("=")
            if (at < 0) Pair(part, "") else Pair(part.substring(0, at), part.substring(at + 1))
        }
    }

    fun workerUrl(base: String): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        val root = base.trimEnd('/')
        val params = extraQuery.entries.joinToString("&") { (key, value) ->
            URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
        }
        return root + "/taj" + if (params.isEmpty()) "" else "?" + params
    }

    fun writeNullable(map: com.facebook.react.bridge.WritableMap, key: String, value: String?) {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        if (value == null) map.putNull(key) else map.putString(key, value)
    }

    fun pickRaw(obj: JSONObject, alias: String, fallback: String): Any? {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        if (obj.has(alias) && !obj.isNull(alias)) return obj.opt(alias)
        if (obj.has(fallback) && !obj.isNull(fallback)) return obj.opt(fallback)
        return null
    }
}

/* obfuscation-batch:v1 */
private fun rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 35) + 8
    val x = ((n xor 137) shl 2) % span
    return if (x < 0) x + span else x
}
private fun rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 4
    return (x xor 191) and 19492
}
