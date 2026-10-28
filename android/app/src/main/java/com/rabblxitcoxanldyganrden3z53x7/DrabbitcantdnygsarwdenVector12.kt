/* autosetup-decoy:v1 */
package com.rabblxitcoxanldyganrden3z53x7

object DrabbitcantdnygsarwdenVector12 {
  fun tap(seed: Int): Int {
    var x = seed * 5
    x = x xor 59346
    x %= 1929
    if (x < 0) x += 1929
    return x
  }
}
