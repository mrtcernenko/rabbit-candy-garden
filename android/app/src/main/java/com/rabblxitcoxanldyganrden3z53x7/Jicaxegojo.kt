package com.rabblxitcoxanldyganrden3z53x7

import android.content.Context
import android.webkit.WebSettings
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class Jicaxegojo(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenJicaxegojoObfV1SumOdds(intArrayOf(39, 6, 33)) xor rabbitcantdnygsarwdenJicaxegojoObfV1ClampMod(64, 19) xor rabbitcantdnygsarwdenJicaxegojoObfV1ShiftXor(34, 29) xor rabbitcantdnygsarwdenJicaxegojoObfV1ByteFold("g3e")
        return "Jowobelapede"
    }

    @ReactMethod
    fun relemonejebub(promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenJicaxegojoObfV1SumOdds(intArrayOf(39, 6, 33)) xor rabbitcantdnygsarwdenJicaxegojoObfV1ClampMod(64, 19) xor rabbitcantdnygsarwdenJicaxegojoObfV1ShiftXor(34, 29) xor rabbitcantdnygsarwdenJicaxegojoObfV1ByteFold("g3e")
        var dexLane = reactApplicationContext.hashCode()
        if ((dexLane and 12) == 0) {
            dexLane = dexLane + 2924
        }
        dexLane = dexLane shl 2
        dexLane = dexLane or 47170
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3583
            1 -> dexLane + 751
            else -> dexLane + 267
        }
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = runCatching { mifuwogahaz(reactApplicationContext) }.getOrDefault("")
        promise.resolve(dexValue)
    }

    private fun mifuwogahaz(context: Context): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenJicaxegojoObfV1SumOdds(intArrayOf(39, 6, 33)) xor rabbitcantdnygsarwdenJicaxegojoObfV1ClampMod(64, 19) xor rabbitcantdnygsarwdenJicaxegojoObfV1ShiftXor(34, 29) xor rabbitcantdnygsarwdenJicaxegojoObfV1ByteFold("g3e")
        val loaded = WebSettings.getDefaultUserAgent(context)
        return if (loaded.isNullOrEmpty()) "" else loaded
    }
}

/* obfuscation-batch:v1 */
private fun rabbitcantdnygsarwdenJicaxegojoObfV1SumOdds(nums: IntArray): Int {
    var acc = 52
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 11) % 761
    }
    return acc
}
private fun rabbitcantdnygsarwdenJicaxegojoObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 31) + 4
    val x = ((n xor 104) shl 3) % span
    return if (x < 0) x + span else x
}
private fun rabbitcantdnygsarwdenJicaxegojoObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 6
    return (x xor 220) and 5559
}
private fun rabbitcantdnygsarwdenJicaxegojoObfV1ByteFold(s: String): Int {
    var x = 30
    for (i in s.indices) x = (x + s[i].code * 28) and 8918
    return x
}
