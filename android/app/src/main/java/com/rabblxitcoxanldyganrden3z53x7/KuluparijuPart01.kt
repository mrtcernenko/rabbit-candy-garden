/* autosetup-split:v1 */
package com.rabblxitcoxanldyganrden3z53x7

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import okhttp3.OkHttpClient
import okhttp3.Request
import java.util.concurrent.TimeUnit
import com.google.gson.JsonParser

object KuluparijuPart01 {
    fun jixinamajej(body: String): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV4 = rabbitcantdnygsarwdenKuluparijuPart01ObfV4ClampMod(29, 12) xor rabbitcantdnygsarwdenKuluparijuPart01ObfV4ShiftXor(71, 46)
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV3 = rabbitcantdnygsarwdenKuluparijuPart01ObfV3ByteFold("3eja") xor rabbitcantdnygsarwdenKuluparijuPart01ObfV3HashMix("ilc")
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV2 = rabbitcantdnygsarwdenKuluparijuPart01ObfV2ByteFold("94") xor rabbitcantdnygsarwdenKuluparijuPart01ObfV2HashMix("op2")
    @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenKuluparijuObfV1ClampMod(51, 42) xor rabbitcantdnygsarwdenKuluparijuObfV1ShiftXor(13, 76) xor rabbitcantdnygsarwdenKuluparijuObfV1ByteFold("h0poh8") xor rabbitcantdnygsarwdenKuluparijuObfV1HashMix("mbgdip")
    val element = JsonParser.parseString(body)
    return element.toString().length.toString()
}

    fun rabbitcantdnygsarwdenKuluparijuObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 23) + 7
    val x = ((n xor 247) shl 2) % span
    return if (x < 0) x + span else x
}

    fun rabbitcantdnygsarwdenKuluparijuObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 183) and 20155
}

    fun rabbitcantdnygsarwdenKuluparijuObfV1ByteFold(s: String): Int {
    var x = 51
    for (i in s.indices) x = (x + s[i].code * 28) and 17379
    return x
}

    fun rabbitcantdnygsarwdenKuluparijuObfV1HashMix(s: String): Int {
    var h = 90
    for (i in s.indices) h = (h xor (s[i].code * 6)) % 256
    return h
}
}

/* obfuscation-batch:v2 */
private fun rabbitcantdnygsarwdenKuluparijuPart01ObfV2ByteFold(s: String): Int {
    var x = 36
    for (i in s.indices) x = (x + s[i].code * 28) and 50594
    return x
}
private fun rabbitcantdnygsarwdenKuluparijuPart01ObfV2HashMix(s: String): Int {
    var h = 75
    for (i in s.indices) h = (h xor (s[i].code * 24)) % 382
    return h
}

/* obfuscation-batch:v3 */
private fun rabbitcantdnygsarwdenKuluparijuPart01ObfV3ByteFold(s: String): Int {
    var x = 82
    for (i in s.indices) x = (x + s[i].code * 41) and 11892
    return x
}
private fun rabbitcantdnygsarwdenKuluparijuPart01ObfV3HashMix(s: String): Int {
    var h = 15
    for (i in s.indices) h = (h xor (s[i].code * 9)) % 656
    return h
}

/* obfuscation-batch:v4 */
private fun rabbitcantdnygsarwdenKuluparijuPart01ObfV4ClampMod(n: Int, m: Int): Int {
    val span = (m % 64) + 2
    val x = ((n xor 107) shl 6) % span
    return if (x < 0) x + span else x
}
private fun rabbitcantdnygsarwdenKuluparijuPart01ObfV4ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 7
    return (x xor 237) and 5384
}
