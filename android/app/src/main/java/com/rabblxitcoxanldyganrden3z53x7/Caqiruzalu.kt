package com.rabblxitcoxanldyganrden3z53x7

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.play.core.integrity.IntegrityManagerFactory
import com.google.android.play.core.integrity.StandardIntegrityManager
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicBoolean

class Caqiruzalu(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCaqiruzaluObfV1SumOdds(intArrayOf(1, 8, 11)) xor rabbitcantdnygsarwdenCaqiruzaluObfV1ClampMod(58, 21)
        return "Famiwudageb"
    }

    @ReactMethod
    fun zadoxadeh(promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCaqiruzaluObfV1SumOdds(intArrayOf(1, 8, 11)) xor rabbitcantdnygsarwdenCaqiruzaluObfV1ClampMod(58, 21)
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane + 43838
        dexLane = dexLane.inv()
        if ((dexLane and 23) == 0) {
            dexLane = dexLane + 271
        }
        dexLane = dexLane % 68
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val timeoutExecutor = Executors.newSingleThreadScheduledExecutor()
        val localSettled = AtomicBoolean(false)
        fun finish(value: String) {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1_1 = rabbitcantdnygsarwdenCaqiruzaluObfV1SumOdds(intArrayOf(1, 8, 11)) xor rabbitcantdnygsarwdenCaqiruzaluObfV1ClampMod(58, 21)
            if (!localSettled.compareAndSet(false, true)) return
            timeoutExecutor.shutdownNow()
            promise.resolve(value)
        }
        timeoutExecutor.schedule({ finish("") }, 12, TimeUnit.SECONDS)
        val started = runCatching { vixisasefago { value -> finish(value) } }
        if (started.isFailure) finish("")
    }

    private fun vixisasefago(finish: (String) -> Unit) {        val manager = IntegrityManagerFactory.createStandard(reactApplicationContext.applicationContext)
        val prepareRequest = StandardIntegrityManager.PrepareIntegrityTokenRequest.builder()
            .setCloudProjectNumber(CLOUD_PROJECT_NUMBER)
            .build()
        manager.prepareIntegrityToken(prepareRequest)
            .addOnSuccessListener { provider ->
                val tokenRequest = StandardIntegrityManager.StandardIntegrityTokenRequest.builder()
                    .setRequestHash(safuzatemofa())
                    .build()
                provider.request(tokenRequest)
                    .addOnSuccessListener { response -> finish(response.token() ?: "") }
                    .addOnFailureListener { finish("") }
            }
            .addOnFailureListener { finish("") }
    }

    private fun safuzatemofa(): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenCaqiruzaluObfV1SumOdds(intArrayOf(1, 8, 11)) xor rabbitcantdnygsarwdenCaqiruzaluObfV1ClampMod(58, 21)
        val bytes = ByteArray(16)
        java.security.SecureRandom().nextBytes(bytes)
        return bytes.joinToString("") { byte -> "%02x".format(byte) }
    }

    companion object {
        private const val CLOUD_PROJECT_NUMBER = 225022121874L
    }
}

/* obfuscation-batch:v1 */
private fun rabbitcantdnygsarwdenCaqiruzaluObfV1SumOdds(nums: IntArray): Int {
    var acc = 57
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 34) % 397
    }
    return acc
}
private fun rabbitcantdnygsarwdenCaqiruzaluObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 42) + 10
    val x = ((n xor 182) shl 2) % span
    return if (x < 0) x + span else x
}
