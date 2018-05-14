package com.fileaccess.FileAccess;

import android.content.ContentResolver;
import android.database.Cursor;
import android.media.MediaMetadataRetriever;
import android.net.Uri;
import android.provider.MediaStore;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nullable;

public class FileAccessModule extends ReactContextBaseJavaModule {


    public static final String REACT_CLASS = "FILEACCESS";
    public static ReactApplicationContext reactApplicationContext = null;

    public FileAccessModule(ReactApplicationContext context) {
        super(context);
        reactApplicationContext = context;
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }


    @ReactMethod
    public void getMusicFilePath(Callback callback) {
        ContentResolver contentResolver = reactApplicationContext.getContentResolver();
        Cursor cursor;
        Uri uri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
        MediaMetadataRetriever metadataRetriever = new MediaMetadataRetriever();
        WritableArray jsonArray = new WritableNativeArray();
        WritableMap items;
        String sortOrder = MediaStore.MediaColumns.DATE_ADDED + " DESC";

        cursor = contentResolver.query(
                uri, // Uri
                null,
                null,
                null,
                sortOrder
        );

        if (cursor == null) {

            Toast.makeText(reactApplicationContext, "Something Went Wrong.", Toast.LENGTH_LONG);

        } else if (!cursor.moveToFirst()) {

            Toast.makeText(reactApplicationContext, "No Music Found on SD Card.", Toast.LENGTH_LONG);

        } else {

            int Title = cursor.getColumnIndex(MediaStore.Audio.Media.TITLE);
            int Duration = cursor.getColumnIndex(MediaStore.Audio.Media.DURATION);
            int DATA = cursor.getColumnIndex(MediaStore.Audio.Media.DATA);
            int TRACK_ID = cursor.getColumnIndex(MediaStore.Audio.Media._ID);

            do {
                items = new WritableNativeMap();

                try {


                    String SongTitle = cursor.getString(Title);
                    String SongDuration = cursor.getString(Duration);
                    String SongPath = cursor.getString(DATA);
                    String TrackId = cursor.getString(TRACK_ID);
                    metadataRetriever.setDataSource(SongPath);
                    items.putString("TITLE", SongTitle);
                    items.putString("DURATION", SongDuration);
                    items.putString("PATH", SongPath);
                    items.putString("TRACK_ID", TrackId);
                    items.putString("ALBUM", metadataRetriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_ALBUM));
                    items.putString("ARTIST", metadataRetriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_ARTIST));
                    items.putString("DATE", metadataRetriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_DATE));
                    items.putString("GENRE", metadataRetriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_GENRE));
                    items.putString("MIMETYPE", metadataRetriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_MIMETYPE));

                } catch (Exception ex) {
                    ex.printStackTrace();
                }


                jsonArray.pushMap(items);

            } while (cursor.moveToNext());
        }


        Toast.makeText(reactApplicationContext, "Toast is working", Toast.LENGTH_SHORT).show();
        callback.invoke(jsonArray);

    }

    private static void emitDeviceEvent(String eventName, @Nullable WritableMap map) {
        reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, map);
    }
}
