package com.helloworld;

import com.facebook.infer.annotation.Assertions;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactInstanceManagerBuilder;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.devsupport.interfaces.DevBundleDownloadListener;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.DevBundleDownloadListenerAdapter;
import com.reactnativenavigation.react.BundleDownloadListenerProvider;
import com.reactnativenavigation.react.NavigationDevBundleDownloadListener;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

// re-implement NavigationReactNativeHost with extending DefaultReactNativeHost instead of ReactNativeHost
public abstract class DefaultNavigationReactNativeHost extends DefaultReactNativeHost implements BundleDownloadListenerProvider {

    private @Nullable NavigationDevBundleDownloadListener bundleListener;
    private final DevBundleDownloadListener bundleListenerMediator = new DevBundleDownloadListenerAdapter() {
        @Override
        public void onSuccess() {
            if (bundleListener != null) {
                bundleListener.onSuccess();
            }
        }
    };

    public DefaultNavigationReactNativeHost(NavigationApplication application) {
        super(application);
    }

    @Override
    public void setBundleLoaderListener(NavigationDevBundleDownloadListener listener) {
        bundleListener = listener;
    }

    protected ReactInstanceManager createReactInstanceManager() {
        ReactInstanceManagerBuilder builder = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setJSMainModulePath(getJSMainModuleName())
                .setUseDeveloperSupport(getUseDeveloperSupport())
                .setRedBoxHandler(getRedBoxHandler())
                .setJavaScriptExecutorFactory(getJavaScriptExecutorFactory())
                .setInitialLifecycleState(LifecycleState.BEFORE_CREATE)
                .setJSIModulesPackage(getJSIModulePackage())
                .setDevBundleDownloadListener(getDevBundleDownloadListener());

        for (ReactPackage reactPackage : getPackages()) {
            builder.addPackage(reactPackage);
        }

        String jsBundleFile = getJSBundleFile();
        if (jsBundleFile != null) {
            builder.setJSBundleFile(jsBundleFile);
        } else {
            builder.setBundleAssetName(Assertions.assertNotNull(getBundleAssetName()));
        }
        return builder.build();
    }

    @SuppressWarnings("WeakerAccess")
    @NonNull
    protected DevBundleDownloadListener getDevBundleDownloadListener() {
        return bundleListenerMediator;
    }
}
