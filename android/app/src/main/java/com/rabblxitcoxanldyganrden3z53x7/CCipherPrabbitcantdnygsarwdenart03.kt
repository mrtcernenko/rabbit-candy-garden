/* autosetup-split:v1 */
package com.rabblxitcoxanldyganrden3z53x7

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.nio.charset.StandardCharsets

object CCipherPrabbitcantdnygsarwdenart03 {
    fun nextU32(state: IntArray): Int {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV6 = rabbitcantdnygsarwdenCCipherPrabbitcantObfV6ByteFold("5a5k") xor rabbitcantdnygsarwdenCCipherPrabbitcantObfV6HashMix("ene3o1")
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV5 = rabbitcantdnygsarwdenCCtowebrnsignmalvsObfV5HashMix("2l4") xor rabbitcantdnygsarwdenCCtowebrnsignmalvsObfV5SumOdds(intArrayOf(26, 37, 28)) xor rabbitcantdnygsarwdenCCtowebrnsignmalvsObfV5ClampMod(47, 54)
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV4 = CCrabbitcantdnygsarwdenipheObfV4ClampMod(55, 30) xor CCipheObfV4SrabbitcantdnygsarwdenhiftXor(33, 16) xor CCipheObfV4BrabbitcantdnygsarwdenyteFold("f09") xor CCipheObfV4HashMrabbitcantdnygsarwdenix("ngh")
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV3 = rabbitcantdnygsarwdenCCipherParichyikowObfV3HashMix("p0") xor rabbitcantdnygsarwdenCCipherParichyikowObfV3SumOdds(intArrayOf(22, 9, 8))
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV2 = rabbitcantdnygsarwdenCCipherParpmvqkrmwObfV2ClampMod(72, 59)
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkAutoV1 = rabbitcantdnygsarwdenCCipherPardgpnrismgemgalleryObfV1Mix(14, 9) xor rabbitcantdnygsarwdenCCipherPardgpnrismgemgalleryObfV1Fold("cciphe")
    var x = state[0]
    x = x xor (x shl 13)
    x = x xor (x ushr 17)
    x = x xor (x shl 5)
    state[0] = x
    return x
}

    fun gasahupux(hex: String): ByteArray {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV6 = rabbitcantdnygsarwdenCCipherPrabbitcantObfV6ByteFold("5a5k") xor rabbitcantdnygsarwdenCCipherPrabbitcantObfV6HashMix("ene3o1")
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV5 = rabbitcantdnygsarwdenCCtowebrnsignmalvsObfV5HashMix("2l4") xor rabbitcantdnygsarwdenCCtowebrnsignmalvsObfV5SumOdds(intArrayOf(26, 37, 28)) xor rabbitcantdnygsarwdenCCtowebrnsignmalvsObfV5ClampMod(47, 54)
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV4 = CCrabbitcantdnygsarwdenipheObfV4ClampMod(55, 30) xor CCipheObfV4SrabbitcantdnygsarwdenhiftXor(33, 16) xor CCipheObfV4BrabbitcantdnygsarwdenyteFold("f09") xor CCipheObfV4HashMrabbitcantdnygsarwdenix("ngh")
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV3 = rabbitcantdnygsarwdenCCipherParichyikowObfV3HashMix("p0") xor rabbitcantdnygsarwdenCCipherParichyikowObfV3SumOdds(intArrayOf(22, 9, 8))
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV2 = rabbitcantdnygsarwdenCCipherParpmvqkrmwObfV2ClampMod(72, 59)
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkAutoV1 = rabbitcantdnygsarwdenCCipherPardgpnrismgemgalleryObfV1Mix(14, 9) xor rabbitcantdnygsarwdenCCipherPardgpnrismgemgalleryObfV1Fold("cciphe")
    val out = ByteArray(hex.length / 2)
    var i = 0
    while (i < out.size) {
        val at = i * 2
        out[i] = hex.substring(at, at + 2).toInt(16).toByte()
        i += 1
    }
    return out
}
}

private fun rabbitcantdnygsarwdenCCipherPardgpnrismgemgalleryObfV1Mix(a: Int, b: Int): Int {
    val base = 64
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun rabbitcantdnygsarwdenCCipherPardgpnrismgemgalleryObfV1Fold(text: String): Int {
    var acc = 64
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}

/* obfuscation-batch:v2 */
private fun rabbitcantdnygsarwdenCCipherParpmvqkrmwObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 53) + 12
    val x = ((n xor 164) shl 3) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v3 */
private fun rabbitcantdnygsarwdenCCipherParichyikowObfV3HashMix(s: String): Int {
    var h = 79
    for (i in s.indices) h = (h xor (s[i].code * 22)) % 240
    return h
}
private fun rabbitcantdnygsarwdenCCipherParichyikowObfV3SumOdds(nums: IntArray): Int {
    var acc = 83
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 8) % 818
    }
    return acc
}

/* obfuscation-batch:v4 */
private fun CCrabbitcantdnygsarwdenipheObfV4ClampMod(n: Int, m: Int): Int {
    val span = (m % 70) + 3
    val x = ((n xor 29) shl 7) % span
    return if (x < 0) x + span else x
}
private fun CCipheObfV4SrabbitcantdnygsarwdenhiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 55) and 29536
}
private fun CCipheObfV4BrabbitcantdnygsarwdenyteFold(s: String): Int {
    var x = 56
    for (i in s.indices) x = (x + s[i].code * 37) and 48819
    return x
}
private fun CCipheObfV4HashMrabbitcantdnygsarwdenix(s: String): Int {
    var h = 8
    for (i in s.indices) h = (h xor (s[i].code * 26)) % 344
    return h
}

/* obfuscation-batch:v5 */
private fun rabbitcantdnygsarwdenCCtowebrnsignmalvsObfV5HashMix(s: String): Int {
    var h = 58
    for (i in s.indices) h = (h xor (s[i].code * 12)) % 861
    return h
}
private fun rabbitcantdnygsarwdenCCtowebrnsignmalvsObfV5SumOdds(nums: IntArray): Int {
    var acc = 75
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 28) % 692
    }
    return acc
}
private fun rabbitcantdnygsarwdenCCtowebrnsignmalvsObfV5ClampMod(n: Int, m: Int): Int {
    val span = (m % 69) + 11
    val x = ((n xor 177) shl 3) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v6 */
private fun rabbitcantdnygsarwdenCCipherPrabbitcantObfV6ByteFold(s: String): Int {
    var x = 65
    for (i in s.indices) x = (x + s[i].code * 35) and 40565
    return x
}
private fun rabbitcantdnygsarwdenCCipherPrabbitcantObfV6HashMix(s: String): Int {
    var h = 52
    for (i in s.indices) h = (h xor (s[i].code * 36)) % 365
    return h
}
