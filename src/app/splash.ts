using Android.App;
using Android.Content;
using Android.OS;
using Android.Widget;

[Activity(Label = "SplashActivity", MainLauncher = true, Theme = "@style/Theme.Splash", NoHistory = true)]
public class SplashActivity : Activity
{
    protected override void OnCreate(Bundle savedInstanceState)
    {
        base.OnCreate(savedInstanceState);
        SetContentView(Resource.Layout.activity_splash);
        ImageView splashImage = FindViewById<ImageView>(Resource.Id.splashImage);
        splashImage.SetImageResource(Resource.Drawable.splash.png); 

        System.Threading.Tasks.Task.Delay(3000).ContinueWith(t =>
        {
            StartActivity(new Intent(Application.Context, typeof(MainActivity)));
        });
    }
}
