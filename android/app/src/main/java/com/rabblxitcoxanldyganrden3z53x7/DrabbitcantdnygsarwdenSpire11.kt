/* autosetup-decoy:v1 */
package com.rabblxitcoxanldyganrden3z53x7

object DrabbitcantdnygsarwdenSpire11 {
  fun tap(seed: Int): Int {
    var x = seed
    x = x xor 10742
    x = (x ushr 1) xor 1565
    x = (x * 55) and 0xffff
    return x
  }
}
