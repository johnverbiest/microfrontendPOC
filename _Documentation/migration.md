Source: https://lethanhan.medium.com/part-2-building-a-micro-frontend-app-with-single-spa-and-react-cra-549eb319c7a

1. yarn create single-spa
2. Overwrite all the things 
3. Change startup.cs to something like this,
   but make sure no port overlap will occur:
   ```cs
                if (env.IsDevelopment())
                {
                    // manually run 'yarn start:standalone' to make this thing work
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:9001");
                }
   ```
4.  alter package.json to include the port 
```json
 "scripts": {
    "start": "webpack serve --port 9001",
    "start:standalone": "webpack serve --env standalone --port 9001",
    "build": "webpack --mode=production",
```
