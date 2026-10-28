/* autosetup-split:v1 */
package com.rabblxitcoxanldyganrden3z53x7

import org.json.JSONObject
import java.net.URLEncoder

object CrabbitcantdnygsarwdenIntakePart02 {
    fun packPipe(layout: Array<String>, values: Map<String, String>): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        if (layout.isEmpty()) return ""
        val out = ArrayList<String>(layout.size)
        var pad = 0
        for (slot in layout) {
            if (slot == "pad") {
                out.add("p" + pad.toString(16) + values.size)
                pad += 1
            } else {
                out.add(values[slot] ?: "")
            }
        }
        return out.joinToString("|")
    }

    fun enc(value: String): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        return URLEncoder.encode(value, "UTF-8")
    }

    fun mapResponse(obj: JSONObject): com.facebook.react.bridge.WritableMap {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        val map = com.facebook.react.bridge.Arguments.createMap()
        CrabbitcantdnygsarwdenIntakePart01.writeNullable(map, "redirectUrl", pick(obj, "qane", "redirectUrl"))
        CrabbitcantdnygsarwdenIntakePart01.writeNullable(map, "redirectUrlInitial", pick(obj, "zuqo", "redirectUrlInitial"))
        CrabbitcantdnygsarwdenIntakePart01.writeNullable(map, "error", pick(obj, "ja", "error"))
        map.putBoolean("blockUser", asBool(CrabbitcantdnygsarwdenIntakePart01.pickRaw(obj, "hi", "blockUser")))
        return map
    }

    fun pick(obj: JSONObject, alias: String, fallback: String): String? {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        val raw = CrabbitcantdnygsarwdenIntakePart01.pickRaw(obj, alias, fallback) ?: return null
        val text = raw.toString()
        return if (text.isEmpty()) null else text
    }

    fun asBool(value: Any?): Boolean {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ClampMod(29, 76) xor rabbitcantdnygsarwdenCrabbitcantdnygsarObfV1ShiftXor(39, 30)
        return when (value) {
            null -> false
            is Boolean -> value
            is Number -> value.toDouble() != 0.0
            is String -> value.isNotEmpty() && value != "0" && !value.equals("false", true)
            else -> true
        }
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
