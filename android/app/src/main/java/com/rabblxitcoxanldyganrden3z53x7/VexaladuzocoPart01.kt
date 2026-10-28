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

object VexaladuzocoPart01 {
    fun ducusocifalu(body: String): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV3 = rabbitcantdnygsarwdenVexaladuzocoPart01ObfV3HashMix("p8") xor rabbitcantdnygsarwdenVexaladuzocoPart01ObfV3SumOdds(intArrayOf(28, 23, 6)) xor rabbitcantdnygsarwdenVexaladuzocoPart01ObfV3ClampMod(9, 72) xor rabbitcantdnygsarwdenVexaladuzocoPart01ObfV3ShiftXor(35, 10)
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV2 = rabbitcantdnygsarwdenVexaladuzocoPart01ObfV2ClampMod(53, 4) xor rabbitcantdnygsarwdenVexaladuzocoPart01ObfV2ShiftXor(63, 38)
    @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenVexaladuzocoObfV1SumOdds(intArrayOf(37, 4, 7)) xor rabbitcantdnygsarwdenVexaladuzocoObfV1ClampMod(70, 33)
    val element = JsonParser.parseString(body)
    return element.toString().length.toString()
}

    fun rabbitcantdnygsarwdenVexaladuzocoObfV1SumOdds(nums: IntArray): Int {
    var acc = 38
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 33) % 97
    }
    return acc
}

    fun rabbitcantdnygsarwdenVexaladuzocoObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 20) + 2
    val x = ((n xor 160) shl 6) % span
    return if (x < 0) x + span else x
}
}

/* obfuscation-batch:v2 */
private fun rabbitcantdnygsarwdenVexaladuzocoPart01ObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 29) + 8
    val x = ((n xor 121) shl 6) % span
    return if (x < 0) x + span else x
}
private fun rabbitcantdnygsarwdenVexaladuzocoPart01ObfV2ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 7
    return (x xor 187) and 45131
}

/* obfuscation-batch:v3 */
private fun rabbitcantdnygsarwdenVexaladuzocoPart01ObfV3HashMix(s: String): Int {
    var h = 77
    for (i in s.indices) h = (h xor (s[i].code * 35)) % 614
    return h
}
private fun rabbitcantdnygsarwdenVexaladuzocoPart01ObfV3SumOdds(nums: IntArray): Int {
    var acc = 28
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 22) % 141
    }
    return acc
}
private fun rabbitcantdnygsarwdenVexaladuzocoPart01ObfV3ClampMod(n: Int, m: Int): Int {
    val span = (m % 49) + 2
    val x = ((n xor 203) shl 3) % span
    return if (x < 0) x + span else x
}
private fun rabbitcantdnygsarwdenVexaladuzocoPart01ObfV3ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 147) and 18561
}
