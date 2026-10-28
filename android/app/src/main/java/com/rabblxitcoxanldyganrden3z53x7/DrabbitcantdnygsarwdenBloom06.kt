/* autosetup-decoy:v1 */
package com.rabblxitcoxanldyganrden3z53x7

object DrabbitcantdnygsarwdenBloom06 {
  fun tap(seed: Int): Int {
    var x = seed * 37
    x = x xor 32068
    x %= 1432
    if (x < 0) x += 1432
    return x
  }
}
