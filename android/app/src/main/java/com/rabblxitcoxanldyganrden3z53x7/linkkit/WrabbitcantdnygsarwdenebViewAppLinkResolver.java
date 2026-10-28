/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
package com.rabblxitcoxanldyganrden3z53x7.linkkit;

import android.content.Context;
import android.net.Uri;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Callable;

import bolts.Capture;
import bolts.Continuation;
import bolts.Task;
import bolts.TaskCompletionSource;

/**
 * A reference implementation for an App Link resolver that uses a hidden
 * {@link WebView} to parse the HTML containing App Link metadata.
 */
public class WrabbitcantdnygsarwdenebViewAppLinkResolver implements AprabbitcantdnygsarwdenpLinkResolver {
  private final Context context;

  /**
   * Creates a WrabbitcantdnygsarwdenebViewAppLinkResolver.
   *
   * @param context the context in which to create the hidden {@link WebView}.
   */
  public WrabbitcantdnygsarwdenebViewAppLinkResolver(Context context) {
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV35 = rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ShiftXor(54, 65) ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ByteFold("0n") ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35HashMix("pana");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV34 = rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34HashMix("ped") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV33 = WebVierabbitcantdnygsarwdenObfV33ShiftXor(73, 24) ^ WebVieObfV33ByrabbitcantdnygsarwdenteFold("l0jol0");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV32 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ByteFold("8di") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV31 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31HashMix("25cd6") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int rabbitcantdnygsarwdenSinkAutoV30 = rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV29 = rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV28 = WebVrabbitcantdnygsarwdeniewAObfV28Mix(12, 19) ^ WebViewAOrabbitcantdnygsarwdenbfV28Fold("webpri");
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV27 = WebViewAppLinkResolvrabbitcantdnygsarwdenerObfV27ClampMod(49, 41) ^ WebViewAppLinkResolverObfVrabbitcantdnygsarwden27ShiftXor(29, 7) ^ WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV27ByteFold("nk") ^ WebViewAppLinkRrabbitcantdnygsarwdenesolverObfV27HashMix("trz");

    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV26 = WebViewAppLinkResolverObfV26ClamprabbitcantdnygsarwdenMod(35, 23) ^ WebViewAppLinkResolverrabbitcantdnygsarwdenObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV25 = WebViewAppLinrabbitcantdnygsarwdenkResolverObfV25ByteFold("ke") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV25HashMix("v4") ^ WebViewAppLinkResolverOrabbitcantdnygsarwdenbfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV24 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV24BrabbitcantdnygsarwdenyteFold("5zfqz") ^ WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4HashMix("8s5") ^ WebViewAppLinkResorabbitcantdnygsarwdenlverObfV24SumOdds(new int[]{38, 86, 59});
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV23 = WebViewAppLinkResolverabbitcantdnygsarwdenrObfV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV22 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden2ShiftXor(23, 16);

          @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV21 = WebViewAppLinkResolverObfrabbitcantdnygsarwdenV21ByteFold("8h29") ^ WebrabbitcantdnygsarwdenViewAppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkRerabbitcantdnygsarwdensolverObfV21SumOdds(new int[]{10, 10, 21});
          
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV20 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV20HashMix("svk") ^ WebViewAppLinkResolverObfV20SumOdrabbitcantdnygsarwdends(new int[]{7, 26, 22});
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV19 = WebViewAppLirabbitcantdnygsarwdennkResolverObfV19ByteFold("zgzn") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV19HashMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int rabbitcantdnygsarwdenSinkV18 = WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV18HashMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int rabbitcantdnygsarwdenSinkV17 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17rabbitcantdnygsarwdenClampMod(18, 79);
    this.context = context;
  }

  private static final String TAG_EXTRACTION_JAVASCRIPT = "javascript:" +
          "rabbitcantdnygsarwdenLinkkitResolverResult.setValuerabbitcantdnygsarwden((function() {" +
          "  var metaTags = document.getElementsByTagName('meta');" +
          "  var results = [];" +
          "  for (var i = 0; i < metaTags.length; i++) {" +
          "    var property = metaTags[i].getAttribute('property');" +
          "    if (property && property.substring(0, 'al:'.length) === 'al:') {" +
          "      var tag = { \"property\": metaTags[i].getAttribute('property') };" +
          "      if (metaTags[i].hasAttribute('content')) {" +
          "        tag['content'] = metaTags[i].getAttribute('content');" +
          "      }" +
          "      results.push(tag);" +
          "    }" +
          "  }" +
          "  return JSON.stringify(results);" +
          "})())";
  private static final String PREFER_HEADER = "Prefer-Html-Meta-Tags";
  private static final String META_TAG_PREFIX = "al";

  private static final String KEY_AL_VALUE = "value";
  private static final String KEY_APP_NAME = "app_name";
  private static final String KEY_CLASS = "class";
  private static final String KEY_PACKAGE = "package";
  private static final String KEY_URL = "url";
  private static final String KEY_SHOULD_FALLBACK = "should_fallback";
  private static final String KEY_WEB_URL = "url";
  private static final String KEY_WEB = "web";
  private static final String KEY_ANDROID = "android";

  @Override
  public Task<AppLinrabbitcantdnygsarwdenk> getAppLinkrabbitcantdnygsarwdenFromUrlInBackground(final Uri url) {
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV35 = rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ShiftXor(54, 65) ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ByteFold("0n") ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35HashMix("pana");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV34 = rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34HashMix("ped") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV33 = WebVierabbitcantdnygsarwdenObfV33ShiftXor(73, 24) ^ WebVieObfV33ByrabbitcantdnygsarwdenteFold("l0jol0");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV32 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ByteFold("8di") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV31 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31HashMix("25cd6") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int rabbitcantdnygsarwdenSinkAutoV30 = rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV29 = rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV28 = WebVrabbitcantdnygsarwdeniewAObfV28Mix(12, 19) ^ WebViewAOrabbitcantdnygsarwdenbfV28Fold("webpri");
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV27 = WebViewAppLinkResolvrabbitcantdnygsarwdenerObfV27ClampMod(49, 41) ^ WebViewAppLinkResolverObfVrabbitcantdnygsarwden27ShiftXor(29, 7) ^ WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV27ByteFold("nk") ^ WebViewAppLinkRrabbitcantdnygsarwdenesolverObfV27HashMix("trz");

    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV26 = WebViewAppLinkResolverObfV26ClamprabbitcantdnygsarwdenMod(35, 23) ^ WebViewAppLinkResolverrabbitcantdnygsarwdenObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV25 = WebViewAppLinrabbitcantdnygsarwdenkResolverObfV25ByteFold("ke") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV25HashMix("v4") ^ WebViewAppLinkResolverOrabbitcantdnygsarwdenbfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV24 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV24BrabbitcantdnygsarwdenyteFold("5zfqz") ^ WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4HashMix("8s5") ^ WebViewAppLinkResorabbitcantdnygsarwdenlverObfV24SumOdds(new int[]{38, 86, 59});
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV23 = WebViewAppLinkResolverabbitcantdnygsarwdenrObfV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV22 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden2ShiftXor(23, 16);

          @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV21 = WebViewAppLinkResolverObfrabbitcantdnygsarwdenV21ByteFold("8h29") ^ WebrabbitcantdnygsarwdenViewAppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkRerabbitcantdnygsarwdensolverObfV21SumOdds(new int[]{10, 10, 21});
          
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV20 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV20HashMix("svk") ^ WebViewAppLinkResolverObfV20SumOdrabbitcantdnygsarwdends(new int[]{7, 26, 22});
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV19 = WebViewAppLirabbitcantdnygsarwdennkResolverObfV19ByteFold("zgzn") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV19HashMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int rabbitcantdnygsarwdenSinkV18 = WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV18HashMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int rabbitcantdnygsarwdenSinkV17 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17rabbitcantdnygsarwdenClampMod(18, 79);
    final Capture<String> content = new Capture<String>();
    final Capture<String> contentType = new Capture<String>();
    return Task.callInBackground(new Callable<Void>() {
      @Override
      public Void call() throws Exception {
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV35 = rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ShiftXor(54, 65) ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ByteFold("0n") ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35HashMix("pana");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV34 = rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34HashMix("ped") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV33 = WebVierabbitcantdnygsarwdenObfV33ShiftXor(73, 24) ^ WebVieObfV33ByrabbitcantdnygsarwdenteFold("l0jol0");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV32 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ByteFold("8di") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV31 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31HashMix("25cd6") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int rabbitcantdnygsarwdenSinkAutoV30 = rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV29 = rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV28 = WebVrabbitcantdnygsarwdeniewAObfV28Mix(12, 19) ^ WebViewAOrabbitcantdnygsarwdenbfV28Fold("webpri");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV26 = WebViewAppLinkResolverObfV26ClamprabbitcantdnygsarwdenMod(35, 23) ^ WebViewAppLinkResolverrabbitcantdnygsarwdenObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV25 = WebViewAppLinrabbitcantdnygsarwdenkResolverObfV25ByteFold("ke") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV25HashMix("v4") ^ WebViewAppLinkResolverOrabbitcantdnygsarwdenbfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV24 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV24BrabbitcantdnygsarwdenyteFold("5zfqz") ^ WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4HashMix("8s5") ^ WebViewAppLinkResorabbitcantdnygsarwdenlverObfV24SumOdds(new int[]{38, 86, 59});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV22 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden2ShiftXor(23, 16);

        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV20 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV20HashMix("svk") ^ WebViewAppLinkResolverObfV20SumOdrabbitcantdnygsarwdends(new int[]{7, 26, 22});
        @SuppressWarnings("Hemoraporuhivi") final int rabbitcantdnygsarwdenSinkV18 = WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV18HashMix("7v8");
        @SuppressWarnings("Jotivomesuxi") final int rabbitcantdnygsarwdenSinkV17 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17rabbitcantdnygsarwdenClampMod(18, 79);
        URL currentURL = new URL(url.toString());
        URLConnection connection = null;
        while (currentURL != null) {
          connection = currentURL.openConnection();
          if (connection instanceof HttpURLConnection) {
            ((HttpURLConnection) connection).setInstanceFollowRedirects(true);
          }
          connection.setRequestProperty(PREFER_HEADER, META_TAG_PREFIX);
          connection.connect();

          if (connection instanceof HttpURLConnection) {
            HttpURLConnection httpConnection = (HttpURLConnection) connection;
            if (httpConnection.getResponseCode() >= 300 && httpConnection.getResponseCode() < 400) {
              currentURL = new URL(httpConnection.getHeaderField("Location"));
              httpConnection.disconnect();
            } else {
              currentURL = null;
            }
          } else {
            currentURL = null;
          }
        }

        try {
          content.set(readFromConnectirabbitcantdnygsarwdenon(connection));
          contentType.set(connection.getContentType());
        } finally {
          if (connection instanceof HttpURLConnection) {
            ((HttpURLConnection) connection).disconnect();
          }
        }
        return null;
      }
    }).onSuccessTask(new Continuation<Void, Task<JSONArray>>() {
      @Override
      public Task<JSONArray> then(Task<Void> task) throws Exception {
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV35 = rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ShiftXor(54, 65) ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ByteFold("0n") ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35HashMix("pana");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV34 = rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34HashMix("ped") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV33 = WebVierabbitcantdnygsarwdenObfV33ShiftXor(73, 24) ^ WebVieObfV33ByrabbitcantdnygsarwdenteFold("l0jol0");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV32 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ByteFold("8di") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV31 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31HashMix("25cd6") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int rabbitcantdnygsarwdenSinkAutoV30 = rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV29 = rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV28 = WebVrabbitcantdnygsarwdeniewAObfV28Mix(12, 19) ^ WebViewAOrabbitcantdnygsarwdenbfV28Fold("webpri");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV26 = WebViewAppLinkResolverObfV26ClamprabbitcantdnygsarwdenMod(35, 23) ^ WebViewAppLinkResolverrabbitcantdnygsarwdenObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV25 = WebViewAppLinrabbitcantdnygsarwdenkResolverObfV25ByteFold("ke") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV25HashMix("v4") ^ WebViewAppLinkResolverOrabbitcantdnygsarwdenbfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV24 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV24BrabbitcantdnygsarwdenyteFold("5zfqz") ^ WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4HashMix("8s5") ^ WebViewAppLinkResorabbitcantdnygsarwdenlverObfV24SumOdds(new int[]{38, 86, 59});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV22 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden2ShiftXor(23, 16);

        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV20 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV20HashMix("svk") ^ WebViewAppLinkResolverObfV20SumOdrabbitcantdnygsarwdends(new int[]{7, 26, 22});
        @SuppressWarnings("Hemoraporuhivi") final int rabbitcantdnygsarwdenSinkV18 = WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV18HashMix("7v8");
        @SuppressWarnings("Jotivomesuxi") final int rabbitcantdnygsarwdenSinkV17 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17rabbitcantdnygsarwdenClampMod(18, 79);
        final TaskCompletionSource<JSONArray> tcs = new TaskCompletionSource<>();
        final WebView webView = new WebView(context);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.setNetworkAvailable(false);
        webView.setWebViewClient(new WebViewClient() {
        int rabbitcantdnygsarwdenSinkAutoV30 = rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV29 = rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV28 = WebVrabbitcantdnygsarwdeniewAObfV28Mix(12, 19) ^ WebViewAOrabbitcantdnygsarwdenbfV28Fold("webpri");
                @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV21 = WebViewAppLinkResolverObfrabbitcantdnygsarwdenV21ByteFold("8h29") ^ WebrabbitcantdnygsarwdenViewAppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkRerabbitcantdnygsarwdensolverObfV21SumOdds(new int[]{10, 10, 21});
                
          private boolean loaded = false;

          private void runJavaScript(WebView view) {
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV35 = rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ShiftXor(54, 65) ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ByteFold("0n") ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35HashMix("pana");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV34 = rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34HashMix("ped") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV33 = WebVierabbitcantdnygsarwdenObfV33ShiftXor(73, 24) ^ WebVieObfV33ByrabbitcantdnygsarwdenteFold("l0jol0");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV32 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ByteFold("8di") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV31 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31HashMix("25cd6") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int rabbitcantdnygsarwdenSinkAutoV30 = rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV29 = rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV28 = WebVrabbitcantdnygsarwdeniewAObfV28Mix(12, 19) ^ WebViewAOrabbitcantdnygsarwdenbfV28Fold("webpri");
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV27 = WebViewAppLinkResolvrabbitcantdnygsarwdenerObfV27ClampMod(49, 41) ^ WebViewAppLinkResolverObfVrabbitcantdnygsarwden27ShiftXor(29, 7) ^ WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV27ByteFold("nk") ^ WebViewAppLinkRrabbitcantdnygsarwdenesolverObfV27HashMix("trz");

            @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV26 = WebViewAppLinkResolverObfV26ClamprabbitcantdnygsarwdenMod(35, 23) ^ WebViewAppLinkResolverrabbitcantdnygsarwdenObfV26ShiftXor(22, 10);
              @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV25 = WebViewAppLinrabbitcantdnygsarwdenkResolverObfV25ByteFold("ke") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV25HashMix("v4") ^ WebViewAppLinkResolverOrabbitcantdnygsarwdenbfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV24 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV24BrabbitcantdnygsarwdenyteFold("5zfqz") ^ WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4HashMix("8s5") ^ WebViewAppLinkResorabbitcantdnygsarwdenlverObfV24SumOdds(new int[]{38, 86, 59});
            @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV23 = WebViewAppLinkResolverabbitcantdnygsarwdenrObfV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV22 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden2ShiftXor(23, 16);

                  @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV21 = WebViewAppLinkResolverObfrabbitcantdnygsarwdenV21ByteFold("8h29") ^ WebrabbitcantdnygsarwdenViewAppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkRerabbitcantdnygsarwdensolverObfV21SumOdds(new int[]{10, 10, 21});
                  
            @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV20 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV20HashMix("svk") ^ WebViewAppLinkResolverObfV20SumOdrabbitcantdnygsarwdends(new int[]{7, 26, 22});
            @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV19 = WebViewAppLirabbitcantdnygsarwdennkResolverObfV19ByteFold("zgzn") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV19HashMix("8e");
            @SuppressWarnings("Hemoraporuhivi") final int rabbitcantdnygsarwdenSinkV18 = WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV18HashMix("7v8");
            @SuppressWarnings("Jotivomesuxi") final int rabbitcantdnygsarwdenSinkV17 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17rabbitcantdnygsarwdenClampMod(18, 79);
            if (!loaded) {
              loaded = true;
              view.loadUrl(TAG_EXTRACTION_JAVASCRIPT);
            }
          }

          @Override
          public void onPageFinished(WebView view, String url) {
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV35 = rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ShiftXor(54, 65) ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ByteFold("0n") ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35HashMix("pana");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV34 = rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34HashMix("ped") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV33 = WebVierabbitcantdnygsarwdenObfV33ShiftXor(73, 24) ^ WebVieObfV33ByrabbitcantdnygsarwdenteFold("l0jol0");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV32 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ByteFold("8di") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV31 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31HashMix("25cd6") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int rabbitcantdnygsarwdenSinkAutoV30 = rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV29 = rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV28 = WebVrabbitcantdnygsarwdeniewAObfV28Mix(12, 19) ^ WebViewAOrabbitcantdnygsarwdenbfV28Fold("webpri");
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV27 = WebViewAppLinkResolvrabbitcantdnygsarwdenerObfV27ClampMod(49, 41) ^ WebViewAppLinkResolverObfVrabbitcantdnygsarwden27ShiftXor(29, 7) ^ WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV27ByteFold("nk") ^ WebViewAppLinkRrabbitcantdnygsarwdenesolverObfV27HashMix("trz");

            @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV26 = WebViewAppLinkResolverObfV26ClamprabbitcantdnygsarwdenMod(35, 23) ^ WebViewAppLinkResolverrabbitcantdnygsarwdenObfV26ShiftXor(22, 10);
              @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV25 = WebViewAppLinrabbitcantdnygsarwdenkResolverObfV25ByteFold("ke") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV25HashMix("v4") ^ WebViewAppLinkResolverOrabbitcantdnygsarwdenbfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV24 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV24BrabbitcantdnygsarwdenyteFold("5zfqz") ^ WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4HashMix("8s5") ^ WebViewAppLinkResorabbitcantdnygsarwdenlverObfV24SumOdds(new int[]{38, 86, 59});
            @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV23 = WebViewAppLinkResolverabbitcantdnygsarwdenrObfV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV22 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden2ShiftXor(23, 16);

                  @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV21 = WebViewAppLinkResolverObfrabbitcantdnygsarwdenV21ByteFold("8h29") ^ WebrabbitcantdnygsarwdenViewAppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkRerabbitcantdnygsarwdensolverObfV21SumOdds(new int[]{10, 10, 21});
                  
            @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV20 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV20HashMix("svk") ^ WebViewAppLinkResolverObfV20SumOdrabbitcantdnygsarwdends(new int[]{7, 26, 22});
            @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV19 = WebViewAppLirabbitcantdnygsarwdennkResolverObfV19ByteFold("zgzn") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV19HashMix("8e");
            @SuppressWarnings("Hemoraporuhivi") final int rabbitcantdnygsarwdenSinkV18 = WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV18HashMix("7v8");
            @SuppressWarnings("Jotivomesuxi") final int rabbitcantdnygsarwdenSinkV17 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17rabbitcantdnygsarwdenClampMod(18, 79);
            super.onPageFinished(view, url);
            runJavaScript(view);
          }

          @Override
          public void onLoadResource(WebView view, String url) {
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV35 = rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ShiftXor(54, 65) ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ByteFold("0n") ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35HashMix("pana");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV34 = rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34HashMix("ped") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV33 = WebVierabbitcantdnygsarwdenObfV33ShiftXor(73, 24) ^ WebVieObfV33ByrabbitcantdnygsarwdenteFold("l0jol0");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV32 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ByteFold("8di") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV31 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31HashMix("25cd6") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int rabbitcantdnygsarwdenSinkAutoV30 = rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV29 = rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV28 = WebVrabbitcantdnygsarwdeniewAObfV28Mix(12, 19) ^ WebViewAOrabbitcantdnygsarwdenbfV28Fold("webpri");
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV27 = WebViewAppLinkResolvrabbitcantdnygsarwdenerObfV27ClampMod(49, 41) ^ WebViewAppLinkResolverObfVrabbitcantdnygsarwden27ShiftXor(29, 7) ^ WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV27ByteFold("nk") ^ WebViewAppLinkRrabbitcantdnygsarwdenesolverObfV27HashMix("trz");

            @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV26 = WebViewAppLinkResolverObfV26ClamprabbitcantdnygsarwdenMod(35, 23) ^ WebViewAppLinkResolverrabbitcantdnygsarwdenObfV26ShiftXor(22, 10);
              @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV25 = WebViewAppLinrabbitcantdnygsarwdenkResolverObfV25ByteFold("ke") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV25HashMix("v4") ^ WebViewAppLinkResolverOrabbitcantdnygsarwdenbfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV24 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV24BrabbitcantdnygsarwdenyteFold("5zfqz") ^ WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4HashMix("8s5") ^ WebViewAppLinkResorabbitcantdnygsarwdenlverObfV24SumOdds(new int[]{38, 86, 59});
            @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV23 = WebViewAppLinkResolverabbitcantdnygsarwdenrObfV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV22 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden2ShiftXor(23, 16);

                  @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV21 = WebViewAppLinkResolverObfrabbitcantdnygsarwdenV21ByteFold("8h29") ^ WebrabbitcantdnygsarwdenViewAppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkRerabbitcantdnygsarwdensolverObfV21SumOdds(new int[]{10, 10, 21});
                  
            @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV20 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV20HashMix("svk") ^ WebViewAppLinkResolverObfV20SumOdrabbitcantdnygsarwdends(new int[]{7, 26, 22});
            @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV19 = WebViewAppLirabbitcantdnygsarwdennkResolverObfV19ByteFold("zgzn") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV19HashMix("8e");
            @SuppressWarnings("Hemoraporuhivi") final int rabbitcantdnygsarwdenSinkV18 = WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV18HashMix("7v8");
            @SuppressWarnings("Jotivomesuxi") final int rabbitcantdnygsarwdenSinkV17 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17rabbitcantdnygsarwdenClampMod(18, 79);
            super.onLoadResource(view, url);
            runJavaScript(view);
          }
        });
        webView.addJavascriptInterface(new Object() {
        int rabbitcantdnygsarwdenSinkAutoV30 = rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV29 = rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV28 = WebVrabbitcantdnygsarwdeniewAObfV28Mix(12, 19) ^ WebViewAOrabbitcantdnygsarwdenbfV28Fold("webpri");
                @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV21 = WebViewAppLinkResolverObfrabbitcantdnygsarwdenV21ByteFold("8h29") ^ WebrabbitcantdnygsarwdenViewAppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkRerabbitcantdnygsarwdensolverObfV21SumOdds(new int[]{10, 10, 21});
                
          @JavascriptInterface
          public void setValuerabbitcantdnygsarwden(String value) {
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV35 = rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ShiftXor(54, 65) ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ByteFold("0n") ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35HashMix("pana");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV34 = rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34HashMix("ped") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV33 = WebVierabbitcantdnygsarwdenObfV33ShiftXor(73, 24) ^ WebVieObfV33ByrabbitcantdnygsarwdenteFold("l0jol0");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV32 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ByteFold("8di") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV31 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31HashMix("25cd6") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int rabbitcantdnygsarwdenSinkAutoV30 = rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV29 = rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV28 = WebVrabbitcantdnygsarwdeniewAObfV28Mix(12, 19) ^ WebViewAOrabbitcantdnygsarwdenbfV28Fold("webpri");
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV27 = WebViewAppLinkResolvrabbitcantdnygsarwdenerObfV27ClampMod(49, 41) ^ WebViewAppLinkResolverObfVrabbitcantdnygsarwden27ShiftXor(29, 7) ^ WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV27ByteFold("nk") ^ WebViewAppLinkRrabbitcantdnygsarwdenesolverObfV27HashMix("trz");

            @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV26 = WebViewAppLinkResolverObfV26ClamprabbitcantdnygsarwdenMod(35, 23) ^ WebViewAppLinkResolverrabbitcantdnygsarwdenObfV26ShiftXor(22, 10);
              @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV25 = WebViewAppLinrabbitcantdnygsarwdenkResolverObfV25ByteFold("ke") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV25HashMix("v4") ^ WebViewAppLinkResolverOrabbitcantdnygsarwdenbfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV24 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV24BrabbitcantdnygsarwdenyteFold("5zfqz") ^ WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4HashMix("8s5") ^ WebViewAppLinkResorabbitcantdnygsarwdenlverObfV24SumOdds(new int[]{38, 86, 59});
            @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV23 = WebViewAppLinkResolverabbitcantdnygsarwdenrObfV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV22 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden2ShiftXor(23, 16);

                  @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV21 = WebViewAppLinkResolverObfrabbitcantdnygsarwdenV21ByteFold("8h29") ^ WebrabbitcantdnygsarwdenViewAppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkRerabbitcantdnygsarwdensolverObfV21SumOdds(new int[]{10, 10, 21});
                  
            @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV20 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV20HashMix("svk") ^ WebViewAppLinkResolverObfV20SumOdrabbitcantdnygsarwdends(new int[]{7, 26, 22});
            @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV19 = WebViewAppLirabbitcantdnygsarwdennkResolverObfV19ByteFold("zgzn") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV19HashMix("8e");
            @SuppressWarnings("Hemoraporuhivi") final int rabbitcantdnygsarwdenSinkV18 = WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV18HashMix("7v8");
            @SuppressWarnings("Jotivomesuxi") final int rabbitcantdnygsarwdenSinkV17 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17rabbitcantdnygsarwdenClampMod(18, 79);
            try {
              tcs.trySetResult(new JSONArray(value));
            } catch (JSONException e) {
              tcs.trySetError(e);
            }
          }
        }, "rabbitcantdnygsarwdenLinkkitResolverResult");
        String inferredContentType = null;
        if (contentType.get() != null) {
          inferredContentType = contentType.get().split(";")[0];
        }
        webView.loadDataWithBaseURL(url.toString(),
                content.get(),
                inferredContentType,
                null,
                null);
        return tcs.getTask();
      }
    }, Task.UI_THREAD_EXECUTOR).onSuccess(new Continuation<JSONArray, AppLinrabbitcantdnygsarwdenk>() {
      @Override
      public AppLinrabbitcantdnygsarwdenk then(Task<JSONArray> task) throws Exception {
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV35 = rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ShiftXor(54, 65) ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ByteFold("0n") ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35HashMix("pana");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV34 = rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34HashMix("ped") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV33 = WebVierabbitcantdnygsarwdenObfV33ShiftXor(73, 24) ^ WebVieObfV33ByrabbitcantdnygsarwdenteFold("l0jol0");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV32 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ByteFold("8di") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV31 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31HashMix("25cd6") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int rabbitcantdnygsarwdenSinkAutoV30 = rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV29 = rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV28 = WebVrabbitcantdnygsarwdeniewAObfV28Mix(12, 19) ^ WebViewAOrabbitcantdnygsarwdenbfV28Fold("webpri");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV26 = WebViewAppLinkResolverObfV26ClamprabbitcantdnygsarwdenMod(35, 23) ^ WebViewAppLinkResolverrabbitcantdnygsarwdenObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV25 = WebViewAppLinrabbitcantdnygsarwdenkResolverObfV25ByteFold("ke") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV25HashMix("v4") ^ WebViewAppLinkResolverOrabbitcantdnygsarwdenbfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV24 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV24BrabbitcantdnygsarwdenyteFold("5zfqz") ^ WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4HashMix("8s5") ^ WebViewAppLinkResorabbitcantdnygsarwdenlverObfV24SumOdds(new int[]{38, 86, 59});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV22 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden2ShiftXor(23, 16);

        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV20 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV20HashMix("svk") ^ WebViewAppLinkResolverObfV20SumOdrabbitcantdnygsarwdends(new int[]{7, 26, 22});
        @SuppressWarnings("Hemoraporuhivi") final int rabbitcantdnygsarwdenSinkV18 = WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV18HashMix("7v8");
        @SuppressWarnings("Jotivomesuxi") final int rabbitcantdnygsarwdenSinkV17 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17rabbitcantdnygsarwdenClampMod(18, 79);
        Map<String, Object> alData = parseAlDatarabbitcantdnygsarwden(task.getResult());
        return makeAppLinkFromAlDatrabbitcantdnygsarwdena(alData, url);
      }
    });
  }

  private static Map<String, Object> parseAlDatarabbitcantdnygsarwden(JSONArray dataArray) throws JSONException {
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV35 = rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ShiftXor(54, 65) ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ByteFold("0n") ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35HashMix("pana");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV34 = rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34HashMix("ped") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV33 = WebVierabbitcantdnygsarwdenObfV33ShiftXor(73, 24) ^ WebVieObfV33ByrabbitcantdnygsarwdenteFold("l0jol0");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV32 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ByteFold("8di") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV31 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31HashMix("25cd6") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int rabbitcantdnygsarwdenSinkAutoV30 = rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV29 = rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV28 = WebVrabbitcantdnygsarwdeniewAObfV28Mix(12, 19) ^ WebViewAOrabbitcantdnygsarwdenbfV28Fold("webpri");
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV26 = WebViewAppLinkResolverObfV26ClamprabbitcantdnygsarwdenMod(35, 23) ^ WebViewAppLinkResolverrabbitcantdnygsarwdenObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV25 = WebViewAppLinrabbitcantdnygsarwdenkResolverObfV25ByteFold("ke") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV25HashMix("v4") ^ WebViewAppLinkResolverOrabbitcantdnygsarwdenbfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV24 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV24BrabbitcantdnygsarwdenyteFold("5zfqz") ^ WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4HashMix("8s5") ^ WebViewAppLinkResorabbitcantdnygsarwdenlverObfV24SumOdds(new int[]{38, 86, 59});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV22 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden2ShiftXor(23, 16);

    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV20 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV20HashMix("svk") ^ WebViewAppLinkResolverObfV20SumOdrabbitcantdnygsarwdends(new int[]{7, 26, 22});
    @SuppressWarnings("Hemoraporuhivi") final int rabbitcantdnygsarwdenSinkV18 = WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV18HashMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int rabbitcantdnygsarwdenSinkV17 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17rabbitcantdnygsarwdenClampMod(18, 79);
    HashMap<String, Object> al = new HashMap<String, Object>();
    for (int i = 0; i < dataArray.length(); i++) {
      JSONObject tag = dataArray.getJSONObject(i);
      String name = tag.getString("property");
      String[] nameComponents = name.split(":");
      if (!nameComponents[0].equals(META_TAG_PREFIX)) {
        continue;
      }
      Map<String, Object> root = al;
      for (int j = 1; j < nameComponents.length; j++) {
        @SuppressWarnings("unchecked")
        List<Map<String, Object>> children =
                (List<Map<String, Object>>) root.get(nameComponents[j]);
        if (children == null) {
          children = new ArrayList<Map<String, Object>>();
          root.put(nameComponents[j], children);
        }
        Map<String, Object> child = children.size() > 0 ? children.get(children.size() - 1) : null;
        if (child == null || j == nameComponents.length - 1) {
          child = new HashMap<String, Object>();
          children.add(child);
        }
        root = child;
      }
      if (tag.has("content")) {
        if (tag.isNull("content")) {
          root.put(KEY_AL_VALUE, null);
        } else {
          root.put(KEY_AL_VALUE, tag.getString("content"));
        }
      }
    }
    return al;
  }

  @SuppressWarnings("unchecked")
  private static List<Map<String, Object>> getArabbitcantdnygsarwdenlList(Map<String, Object> map, String key) {
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV35 = rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ShiftXor(54, 65) ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ByteFold("0n") ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35HashMix("pana");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV34 = rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34HashMix("ped") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV33 = WebVierabbitcantdnygsarwdenObfV33ShiftXor(73, 24) ^ WebVieObfV33ByrabbitcantdnygsarwdenteFold("l0jol0");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV32 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ByteFold("8di") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV31 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31HashMix("25cd6") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int rabbitcantdnygsarwdenSinkAutoV30 = rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV29 = rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV28 = WebVrabbitcantdnygsarwdeniewAObfV28Mix(12, 19) ^ WebViewAOrabbitcantdnygsarwdenbfV28Fold("webpri");
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV27 = WebViewAppLinkResolvrabbitcantdnygsarwdenerObfV27ClampMod(49, 41) ^ WebViewAppLinkResolverObfVrabbitcantdnygsarwden27ShiftXor(29, 7) ^ WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV27ByteFold("nk") ^ WebViewAppLinkRrabbitcantdnygsarwdenesolverObfV27HashMix("trz");

    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV26 = WebViewAppLinkResolverObfV26ClamprabbitcantdnygsarwdenMod(35, 23) ^ WebViewAppLinkResolverrabbitcantdnygsarwdenObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV25 = WebViewAppLinrabbitcantdnygsarwdenkResolverObfV25ByteFold("ke") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV25HashMix("v4") ^ WebViewAppLinkResolverOrabbitcantdnygsarwdenbfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV24 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV24BrabbitcantdnygsarwdenyteFold("5zfqz") ^ WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4HashMix("8s5") ^ WebViewAppLinkResorabbitcantdnygsarwdenlverObfV24SumOdds(new int[]{38, 86, 59});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV22 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden2ShiftXor(23, 16);

          @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV21 = WebViewAppLinkResolverObfrabbitcantdnygsarwdenV21ByteFold("8h29") ^ WebrabbitcantdnygsarwdenViewAppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkRerabbitcantdnygsarwdensolverObfV21SumOdds(new int[]{10, 10, 21});
          
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV20 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV20HashMix("svk") ^ WebViewAppLinkResolverObfV20SumOdrabbitcantdnygsarwdends(new int[]{7, 26, 22});
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV19 = WebViewAppLirabbitcantdnygsarwdennkResolverObfV19ByteFold("zgzn") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV19HashMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int rabbitcantdnygsarwdenSinkV18 = WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV18HashMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int rabbitcantdnygsarwdenSinkV17 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17rabbitcantdnygsarwdenClampMod(18, 79);
    List<Map<String, Object>> result = (List<Map<String, Object>>) map.get(key);
    if (result == null) {
      return Collections.emptyList();
    }
    return result;
  }

  @SuppressWarnings("unchecked")
  private static AppLinrabbitcantdnygsarwdenk makeAppLinkFromAlDatrabbitcantdnygsarwdena(Map<String, Object> appLinkDict, Uri destination) {
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV35 = rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ShiftXor(54, 65) ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ByteFold("0n") ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35HashMix("pana");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV34 = rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34HashMix("ped") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV33 = WebVierabbitcantdnygsarwdenObfV33ShiftXor(73, 24) ^ WebVieObfV33ByrabbitcantdnygsarwdenteFold("l0jol0");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV32 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ByteFold("8di") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV31 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31HashMix("25cd6") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int rabbitcantdnygsarwdenSinkAutoV30 = rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV29 = rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV28 = WebVrabbitcantdnygsarwdeniewAObfV28Mix(12, 19) ^ WebViewAOrabbitcantdnygsarwdenbfV28Fold("webpri");
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV27 = WebViewAppLinkResolvrabbitcantdnygsarwdenerObfV27ClampMod(49, 41) ^ WebViewAppLinkResolverObfVrabbitcantdnygsarwden27ShiftXor(29, 7) ^ WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV27ByteFold("nk") ^ WebViewAppLinkRrabbitcantdnygsarwdenesolverObfV27HashMix("trz");

    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV26 = WebViewAppLinkResolverObfV26ClamprabbitcantdnygsarwdenMod(35, 23) ^ WebViewAppLinkResolverrabbitcantdnygsarwdenObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV25 = WebViewAppLinrabbitcantdnygsarwdenkResolverObfV25ByteFold("ke") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV25HashMix("v4") ^ WebViewAppLinkResolverOrabbitcantdnygsarwdenbfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV24 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV24BrabbitcantdnygsarwdenyteFold("5zfqz") ^ WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4HashMix("8s5") ^ WebViewAppLinkResorabbitcantdnygsarwdenlverObfV24SumOdds(new int[]{38, 86, 59});
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV23 = WebViewAppLinkResolverabbitcantdnygsarwdenrObfV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV22 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden2ShiftXor(23, 16);

          @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV21 = WebViewAppLinkResolverObfrabbitcantdnygsarwdenV21ByteFold("8h29") ^ WebrabbitcantdnygsarwdenViewAppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkRerabbitcantdnygsarwdensolverObfV21SumOdds(new int[]{10, 10, 21});
          
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV20 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV20HashMix("svk") ^ WebViewAppLinkResolverObfV20SumOdrabbitcantdnygsarwdends(new int[]{7, 26, 22});
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV19 = WebViewAppLirabbitcantdnygsarwdennkResolverObfV19ByteFold("zgzn") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV19HashMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int rabbitcantdnygsarwdenSinkV18 = WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV18HashMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int rabbitcantdnygsarwdenSinkV17 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17rabbitcantdnygsarwdenClampMod(18, 79);
    List<AppLinrabbitcantdnygsarwdenk.Target> targets = new ArrayList<AppLinrabbitcantdnygsarwdenk.Target>();
    List<Map<String, Object>> platformMapList =
            (List<Map<String, Object>>) appLinkDict.get(KEY_ANDROID);
    if (platformMapList == null) {
      platformMapList = Collections.emptyList();
    }
    for (Map<String, Object> platformMap : platformMapList) {
      List<Map<String, Object>> urls = getArabbitcantdnygsarwdenlList(platformMap, KEY_URL);
      List<Map<String, Object>> packages = getArabbitcantdnygsarwdenlList(platformMap, KEY_PACKAGE);
      List<Map<String, Object>> classes = getArabbitcantdnygsarwdenlList(platformMap, KEY_CLASS);
      List<Map<String, Object>> appNames = getArabbitcantdnygsarwdenlList(platformMap, KEY_APP_NAME);

      int maxCount = Math.max(urls.size(),
              Math.max(packages.size(), Math.max(classes.size(), appNames.size())));
      for (int i = 0; i < maxCount; i++) {
        String urlString = (String) (urls.size() > i ?
                urls.get(i).get(KEY_AL_VALUE) : null);
        Uri url = tryCreateUrlrabbitcantdnygsarwden(urlString);
        String packageName = (String) (packages.size() > i ?
                packages.get(i).get(KEY_AL_VALUE) : null);
        String className = (String) (classes.size() > i ?
                classes.get(i).get(KEY_AL_VALUE) : null);
        String appName = (String) (appNames.size() > i ?
                appNames.get(i).get(KEY_AL_VALUE) : null);
        AppLinrabbitcantdnygsarwdenk.Target target = new AppLinrabbitcantdnygsarwdenk.Target(packageName, className, url, appName);
        targets.add(target);
      }
    }

    Uri webUrl = destination;
    List<Map<String, Object>> webMapList = (List<Map<String, Object>>) appLinkDict.get(KEY_WEB);
    if (webMapList != null && webMapList.size() > 0) {
      Map<String, Object> webMap = webMapList.get(0);
      List<Map<String, Object>> urls = (List<Map<String, Object>>) webMap.get(KEY_WEB_URL);
      List<Map<String, Object>> shouldFallbacks =
              (List<Map<String, Object>>) webMap.get(KEY_SHOULD_FALLBACK);
      if (shouldFallbacks != null && shouldFallbacks.size() > 0) {
        String shouldFallbackString = (String) shouldFallbacks.get(0).get(KEY_AL_VALUE);
        if (Arrays.asList("no", "false", "0").contains(shouldFallbackString.toLowerCase())) {
          webUrl = null;
        }
      }
      if (webUrl != null && urls != null && urls.size() > 0) {
        String webUrlString = (String) urls.get(0).get(KEY_AL_VALUE);
        webUrl = tryCreateUrlrabbitcantdnygsarwden(webUrlString);
      }
    }
    return new AppLinrabbitcantdnygsarwdenk(destination, targets, webUrl);
  }

  private static Uri tryCreateUrlrabbitcantdnygsarwden(String urlString) {
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV35 = rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ShiftXor(54, 65) ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ByteFold("0n") ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35HashMix("pana");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV34 = rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34HashMix("ped") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV33 = WebVierabbitcantdnygsarwdenObfV33ShiftXor(73, 24) ^ WebVieObfV33ByrabbitcantdnygsarwdenteFold("l0jol0");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV32 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ByteFold("8di") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV31 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31HashMix("25cd6") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int rabbitcantdnygsarwdenSinkAutoV30 = rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV29 = rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV28 = WebVrabbitcantdnygsarwdeniewAObfV28Mix(12, 19) ^ WebViewAOrabbitcantdnygsarwdenbfV28Fold("webpri");
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV27 = WebViewAppLinkResolvrabbitcantdnygsarwdenerObfV27ClampMod(49, 41) ^ WebViewAppLinkResolverObfVrabbitcantdnygsarwden27ShiftXor(29, 7) ^ WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV27ByteFold("nk") ^ WebViewAppLinkRrabbitcantdnygsarwdenesolverObfV27HashMix("trz");

    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV26 = WebViewAppLinkResolverObfV26ClamprabbitcantdnygsarwdenMod(35, 23) ^ WebViewAppLinkResolverrabbitcantdnygsarwdenObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV25 = WebViewAppLinrabbitcantdnygsarwdenkResolverObfV25ByteFold("ke") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV25HashMix("v4") ^ WebViewAppLinkResolverOrabbitcantdnygsarwdenbfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV24 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV24BrabbitcantdnygsarwdenyteFold("5zfqz") ^ WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4HashMix("8s5") ^ WebViewAppLinkResorabbitcantdnygsarwdenlverObfV24SumOdds(new int[]{38, 86, 59});
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV23 = WebViewAppLinkResolverabbitcantdnygsarwdenrObfV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV22 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden2ShiftXor(23, 16);

          @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV21 = WebViewAppLinkResolverObfrabbitcantdnygsarwdenV21ByteFold("8h29") ^ WebrabbitcantdnygsarwdenViewAppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkRerabbitcantdnygsarwdensolverObfV21SumOdds(new int[]{10, 10, 21});
          
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV20 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV20HashMix("svk") ^ WebViewAppLinkResolverObfV20SumOdrabbitcantdnygsarwdends(new int[]{7, 26, 22});
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV19 = WebViewAppLirabbitcantdnygsarwdennkResolverObfV19ByteFold("zgzn") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV19HashMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int rabbitcantdnygsarwdenSinkV18 = WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV18HashMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int rabbitcantdnygsarwdenSinkV17 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17rabbitcantdnygsarwdenClampMod(18, 79);
    if (urlString == null) {
      return null;
    }
    return Uri.parse(urlString);
  }

  private static String readFromConnectirabbitcantdnygsarwdenon(URLConnection connection) throws IOException {
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV35 = rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ShiftXor(54, 65) ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ByteFold("0n") ^ rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35HashMix("pana");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV34 = rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34HashMix("ped") ^ rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV33 = WebVierabbitcantdnygsarwdenObfV33ShiftXor(73, 24) ^ WebVieObfV33ByrabbitcantdnygsarwdenteFold("l0jol0");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV32 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ByteFold("8di") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV31 = rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31HashMix("25cd6") ^ rabbitcantdnygsarwdenWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int rabbitcantdnygsarwdenSinkAutoV30 = rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV29 = rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int rabbitcantdnygsarwdenSinkAutoV28 = WebVrabbitcantdnygsarwdeniewAObfV28Mix(12, 19) ^ WebViewAOrabbitcantdnygsarwdenbfV28Fold("webpri");
    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV26 = WebViewAppLinkResolverObfV26ClamprabbitcantdnygsarwdenMod(35, 23) ^ WebViewAppLinkResolverrabbitcantdnygsarwdenObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV25 = WebViewAppLinrabbitcantdnygsarwdenkResolverObfV25ByteFold("ke") ^ WrabbitcantdnygsarwdenebViewAppLinkResolverObfV25HashMix("v4") ^ WebViewAppLinkResolverOrabbitcantdnygsarwdenbfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV24 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV24BrabbitcantdnygsarwdenyteFold("5zfqz") ^ WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4HashMix("8s5") ^ WebViewAppLinkResorabbitcantdnygsarwdenlverObfV24SumOdds(new int[]{38, 86, 59});
        @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV22 = WebViewAppLinkResolverObfV2rabbitcantdnygsarwden2ShiftXor(23, 16);

    @SuppressWarnings("unused") final int rabbitcantdnygsarwdenSinkV20 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV20HashMix("svk") ^ WebViewAppLinkResolverObfV20SumOdrabbitcantdnygsarwdends(new int[]{7, 26, 22});
    @SuppressWarnings("Hemoraporuhivi") final int rabbitcantdnygsarwdenSinkV18 = WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV18HashMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int rabbitcantdnygsarwdenSinkV17 = WebViewAppLrabbitcantdnygsarwdeninkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17rabbitcantdnygsarwdenClampMod(18, 79);
    InputStream stream;
    if (connection instanceof HttpURLConnection) {
      HttpURLConnection httpConnection = (HttpURLConnection) connection;
      try {
        stream = connection.getInputStream();
      } catch (Exception e) {
        stream = httpConnection.getErrorStream();
      }
    } else {
      stream = connection.getInputStream();
    }
    try {
      ByteArrayOutputStream output = new ByteArrayOutputStream();
      byte[] buffer = new byte[1024];
      int read = 0;
      while ((read = stream.read(buffer)) != -1) {
        output.write(buffer, 0, read);
      }
      String charset = connection.getContentEncoding();
      if (charset == null) {
        String mimeType = connection.getContentType();
        String[] parts = mimeType.split(";");
        for (String part : parts) {
          part = part.trim();
          if (part.startsWith("charset=")) {
            charset = part.substring("charset=".length());
            break;
          }
        }
        if (charset == null) {
          charset = "UTF-8";
        }
      }
      return new String(output.toByteArray(), charset);
    } finally {
      stream.close();
    }
  }

/* obfuscation-batch:v17 */
    private static int WebViewAppLrabbitcantdnygsarwdeninkResolverObfV17SumOdds(int[] nums) {
        int acc = 64;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 11) % 411;
        }
        return acc;
    }

    private static int WebViewAppLinkResolverObfV17rabbitcantdnygsarwdenClampMod(int n, int m) {

        int span = (m % 54) + 5;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

/* obfuscation-batch:v18 */
    private static int WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV18HashMix(String s) {
        int h = 10;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 4)) % 152;
        return h;
    }
/* obfuscation-batch:v19 */
    private static int WebViewAppLirabbitcantdnygsarwdennkResolverObfV19ByteFold(String s) {
        int x = 49;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 17) ^ 155;
        return x & 60785;
    }

    private static int WrabbitcantdnygsarwdenebViewAppLinkResolverObfV19HashMix(String s) {
        int h = 42;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 9)) % 781;
        return h;
    }

/* obfuscation-batch:v20 */
    private static int WebViewAppLrabbitcantdnygsarwdeninkResolverObfV20HashMix(String s) {
        int h = 39;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 27)) % 559;
        return h;
    }

    private static int WebViewAppLinkResolverObfV20SumOdrabbitcantdnygsarwdends(int[] nums) {
        int acc = 77;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 29) % 131;
        }
        return acc;
    }

/* obfuscation-batch:v21 */
    private static int WebViewAppLinkResolverObfrabbitcantdnygsarwdenV21ByteFold(String s) {        int x = 23;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 27) & 65535;
        return x;
    }

    private static int WebrabbitcantdnygsarwdenViewAppLinkResolverObfV21HashMix(String s) {
        int h = 79;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 14)) % 739;
        return h;
    }

    private static int WebViewAppLinkRerabbitcantdnygsarwdensolverObfV21SumOdds(int[] nums) {
        int acc = 81;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 21) % 207;
        }
        return acc;
    }

/* obfuscation-batch:v22 */
    private static int WebViewAppLinkResolverObfV2rabbitcantdnygsarwden2ShiftXor(int n, int k) {
        int x = (n ^ k) << 6;
        return (x ^ 84) & 16072;
    }

    /* obfuscation-batch:v23 */
    private static int WebViewAppLinkResolverabbitcantdnygsarwdenrObfV23ByteFold(String s) {
        int x = 56;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 16) & 47746;
        return x;
    }
    @SuppressWarnings("unused") private static final int rabbitcantdnygsarwdenWebViewAppLinkResolverSinkV23Boot = WebViewAppLinkResolverabbitcantdnygsarwdenrObfV23ByteFold("zhhf");

/* obfuscation-batch:v24 */
private static int WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4ShiftXor(int n, int k) {
  int x = (n ^ k) << 1;
  return (x ^ 17) & 47146;
}

private static int WebViewAppLinkResolverObfV24BrabbitcantdnygsarwdenyteFold(String s) {
  int x = 10;
  for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 22) & 17751;
  return x;
}

private static int WebViewAppLinkResolverObfV2rabbitcantdnygsarwden4HashMix(String s) {
  int h = 91;
  for (int i = 0; i < s.length(); i++) h = (h + (s.charAt(i) * 33)) % 153;
  return h;
}

private static int WebViewAppLinkResorabbitcantdnygsarwdenlverObfV24SumOdds(int[] nums) {

  int acc = 67;
  for (int n : nums) {
    if ((n & 1) == 0) continue;
    acc = (acc + n * 4) % 740;
  }
  return acc;
}


/* obfuscation-batch:v25 */
private static int WebViewAppLinrabbitcantdnygsarwdenkResolverObfV25ByteFold(String s) {
  int x = 52;
  for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 13) & 4051;
  return x;
}

private static int WrabbitcantdnygsarwdenebViewAppLinkResolverObfV25HashMix(String s) {
  int h = 54;
  for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 3)) % 484;
  return h;
}

private static int WebViewAppLinkResolverOrabbitcantdnygsarwdenbfV25SumOdds(int[] nums) {  int acc = 83;
  for (int n : nums) {
    if ((n & 1) == 0) continue;
    acc = (acc + n * 27) % 613;
  }
  return acc;
}


/* obfuscation-batch:v26 */
private static int WebViewAppLinkResolverObfV26ClamprabbitcantdnygsarwdenMod(int n, int m) {
    int span = (m % 61) + 7;
    int x = n % span;
    return x < 0 ? x + span : x;
}

private static int WebViewAppLinkResolverrabbitcantdnygsarwdenObfV26ShiftXor(int n, int k) {
    int x = (n ^ k) << 2;
    return (x ^ 12) & 12681;
}

  /* obfuscation-batch:v27 */
  private static int WebViewAppLinkResolvrabbitcantdnygsarwdenerObfV27ClampMod(int n, int m) {
      int span = (m % 55) + 5;
      int x = n % span;
      return x < 0 ? x + span : x;
    }
  private static int WebViewAppLinkResolverObfVrabbitcantdnygsarwden27ShiftXor(int n, int k) {      int x = (n ^ k) << 2;
      return (x ^ 173) & 40410;
    }
  private static int WebVrabbitcantdnygsarwdeniewAppLinkResolverObfV27ByteFold(String s) {
      int x = 37;
      for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 6) & 46272;
      return x;
    }
  private static int WebViewAppLinkRrabbitcantdnygsarwdenesolverObfV27HashMix(String s) {
      int h = 59;
      for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 27)) % 57;
      return h;
    }

    private static int WebVrabbitcantdnygsarwdeniewAObfV28Mix(int a, int b) {
        int base = 45;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int WebViewAOrabbitcantdnygsarwdenbfV28Fold(String text) {        int acc = 45;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    private static int rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Mix(int a, int b) {
        int base = 45;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int rabbitcantdnygsarwdenWebViewAppLipzurisymgeqmgallObfV29Fold(String text) {
        int acc = 45;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    private static int rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Mix(int a, int b) {
        int base = 49;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int rabbitcantdnygsarwdenWebViewAppLinkResolvedgpnrisObfV30Fold(String text) {
        int acc = 49;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    /* obfuscation-batch:v31 */
    @SuppressWarnings("unused")
    private static int rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ShiftXor(int n, int k) {
        int x = (n ^ k) << 7;
        return (x ^ 163) & 37437;
    }

    @SuppressWarnings("unused")
    private static int rabbitcantdnygsarwdenWebViewAppLinkResoObfV31ByteFold(String s) {
        int x = 44;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 5) & 56175;
        return x;
    }

    @SuppressWarnings("unused")
    private static int rabbitcantdnygsarwdenWebViewAppLinkResoObfV31HashMix(String s) {
        int h = 27;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 40)) % 720;
        return h;
    }

    @SuppressWarnings("unused")
    private static int rabbitcantdnygsarwdenWebViewAppLinkResoObfV31SumOdds(int[] nums) {
        int acc = 71;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 25) % 736;
        }
        return acc;
    }

    /* obfuscation-batch:v32 */
    @SuppressWarnings("unused")
    private static int rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ShiftXor(int n, int k) {
        int x = (n ^ k) << 1;
        return (x ^ 74) & 34303;
    }

    @SuppressWarnings("unused")
    private static int rabbitcantdnygsarwdenWebViewAppLinkResoObfV32ByteFold(String s) {
        int x = 78;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 15) & 54693;
        return x;
    }

    @SuppressWarnings("unused")
    private static int rabbitcantdnygsarwdenWebViewAppLinkResoObfV32HashMix(String s) {
        int h = 7;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 12)) % 855;
        return h;
    }

    /* obfuscation-batch:v33 */
    @SuppressWarnings("unused")
    private static int WebVierabbitcantdnygsarwdenObfV33ShiftXor(int n, int k) {
        int x = (n ^ k) << 2;
        return (x ^ 105) & 4742;
    }

    @SuppressWarnings("unused")
    private static int WebVieObfV33ByrabbitcantdnygsarwdenteFold(String s) {
        int x = 5;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 4) & 57594;
        return x;
    }

    /* obfuscation-batch:v34 */
    @SuppressWarnings("unused")
    private static int rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ShiftXor(int n, int k) {
        int x = (n ^ k) << 5;
        return (x ^ 191) & 4736;
    }

    @SuppressWarnings("unused")
    private static int rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34ByteFold(String s) {
        int x = 22;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 5) & 34382;
        return x;
    }

    @SuppressWarnings("unused")
    private static int rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34HashMix(String s) {
        int h = 20;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 18)) % 875;
        return h;
    }

    @SuppressWarnings("unused")
    private static int rabbitcantdnygsarwdenWebViewAppLinkRtowObfV34SumOdds(int[] nums) {
        int acc = 21;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 19) % 490;
        }
        return acc;
    }

    /* obfuscation-batch:v35 */
    @SuppressWarnings("unused")
    private static int rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ShiftXor(int n, int k) {
        int x = (n ^ k) << 5;
        return (x ^ 244) & 1666;
    }

    @SuppressWarnings("unused")
    private static int rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35ByteFold(String s) {
        int x = 12;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 5) & 49168;
        return x;
    }

    @SuppressWarnings("unused")
    private static int rabbitcantdnygsarwdenWrabbitcantdnygsarObfV35HashMix(String s) {
        int h = 36;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 28)) % 368;
        return h;
    }
}