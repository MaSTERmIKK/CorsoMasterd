import java.io.IOException;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;

public class HelloWorld {

    public static class HelloMapper 
            extends Mapper<Object, Text, Text, Text> {
        
        @Override
        protected void map(Object key, Text value, Context context)
                throws IOException, InterruptedException {
            context.write(new Text("Hello"), new Text("World"));
        }
    }

    public static class HelloReducer 
            extends Reducer<Text, Text, Text, Text> {
        
        @Override
        protected void reduce(Text key, Iterable<Text> values, Context context)
                throws IOException, InterruptedException {
            context.write(key, new Text("World"));
        }
    }

    public static void main(String[] args) throws Exception {
        Configuration conf = new Configuration();
        Job job = Job.getInstance(conf, "hello world");

        job.setJarByClass(HelloWorld.class);
        job.setMapperClass(HelloMapper.class);
        job.setReducerClass(HelloReducer.class);

        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(Text.class);

        FileInputFormat.addInputPath(job, new Path(args[0]));
        FileOutputFormat.setOutputPath(job, new Path(args[1]));

        System.exit(job.waitForCompletion(true) ? 0 : 1);
    }
}
